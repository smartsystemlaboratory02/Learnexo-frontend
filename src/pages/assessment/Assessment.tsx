import Question from "@/components/ui/Question";
import React, { useEffect, useState } from "react";
// import { academicQuestions } from "@/utils/lib/academictest";
import { useNavigate, useParams } from "react-router-dom";
import { transformQuestion } from "@/utils/funcs";
import TestInstruction from "@/components/ui/TestInstruction";
// import HeaderText from "../onboarding/components/HeaderText";
import MainButton from "@/components/ui/MainButton";
// import type { BaseQuestion } from "@/utils/types/baseTypes";
import { toast } from "sonner";
import StartPage from "./StartPage";
import CountdownPage from "./CountdownPage";
import Spinner from "@/components/ui/Spinner";
import { getAssessmentRequest } from "@/utils/queries/assessment";
import { useQuery } from "@tanstack/react-query";
import { type Answer } from "@/utils/types/baseTypes";
// import { gradeOptions } from "../onboarding/service";

const Assessment = () => {
  const { subject, gradeClass, id } = useParams<{
    subject: string;
    gradeClass: string;
    id: string;
  }>();
  const idInt = parseInt(id ?? "");
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    if (!started) return;
    if (countdown <= 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, countdown]);

  if (!id || isNaN(idInt) || !subject || !gradeClass)
    return (
      <div className="h-full flex flex-col items-center justify-center max-w-sm mx-auto gap-6">
        <p className="text-2xl font-semibold">Question not found</p>
        <MainButton onClick={() => navigate(-1)}>Go Back</MainButton>
      </div>
    );

  const {
    data: assessmentQuestions,
    isPending,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["getAssessmentRequest", subject, gradeClass],
    queryFn: ({ queryKey }) => {
      const [, subject, gradeClass] = queryKey;
      return getAssessmentRequest({ subject, gradeClass });
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error)
    return (
      <div className="h-full flex flex-col items-center justify-center  max-w-sm mx-auto gap-6">
        <p className="text-2xl font-semibold">
          An error has occurred: {error.message}
        </p>
        <MainButton onClick={() => navigate(-1)}>Go Back</MainButton>
      </div>
    );

  if (
    !isSuccess ||
    !assessmentQuestions.data ||
    !Array.isArray(assessmentQuestions.data)
  ) {
    return (
      <div className="h-full flex flex-col items-center justify-center  max-w-sm mx-auto gap-6">
        <p className="text-2xl font-semibold">No questions found</p>
        <MainButton onClick={() => navigate(-1)}>Go Back</MainButton>
      </div>
    );
  }

  const questions = assessmentQuestions.data.map(transformQuestion);
  const numberOfQuestions = questions.length;
  // const question = questions.find((question: BaseQuestion) => question.index === idInt);
  const question = questions[idInt];

  if (!started) {
    return (
      <StartPage
        numberOfQuestions={numberOfQuestions}
        setStarted={setStarted}
      />
    );
  }

  if (countdown > 0) {
    return <CountdownPage countdown={countdown} />;
  }

  if (!question) {
    return (
      <div>
        <p className="mb-4">
          Something went wrong with this question! Kindly proceed
        </p>
        <Navigation idInt={idInt} numberOfQuestions={numberOfQuestions} />
      </div>
    );
  }

  const questionObject = {
    ...question,
    index: idInt,
    selected:
      answers.find((answer) => answer.questionId === question.id)?.answer ?? "",
    setSelected: (val: string) =>
      setAnswers((prev) => {
        const filtered = prev.filter(
          (answer) => answer.questionId !== question.id
        );
        return [...filtered, { questionId: question.id, answer: val }];
      }),
  };

  return (
    <div className="md:border-2 p-4 rounded-md flex h-full justify-center items-center">
      <div className="gap-12 max-w-lg flex flex-col">
        <h1 className="text-2xl text-center font-semibold">
          English Language Assessment
        </h1>
        <TestInstruction numberOfQuestions={numberOfQuestions}>
          From the multiple choice questions, you are to choose answers between
          option A - E
        </TestInstruction>
        <Question questionObject={questionObject} />
        <Navigation idInt={idInt} numberOfQuestions={numberOfQuestions} answers={answers}/>
      </div>
    </div>
  );
};

export default Assessment;

const Navigation: React.FC<{
  idInt: number;
  numberOfQuestions: number;
  answers: Answer[];
}> = ({ idInt, numberOfQuestions }) => {
  const navigate = useNavigate();
  const [submitCount, setSubmitCount] = useState(0);
  const { subject, gradeClass } = useParams<{
    subject: string;
    gradeClass: string;
  }>();

  return (
    <div className="flex gap-4 flex-col md:flex-row mlg:flex-col lgd:flex-row justify-between">
      {idInt > 1 && (
        <div className="md:mr-auto mlg:mr-0 lgd:mr-auto">
          <MainButton
            white
            onClick={() => navigate(`../${subject}/${gradeClass}/${idInt - 1}`)}
          >
            Previous Question
          </MainButton>
        </div>
      )}

      {idInt < numberOfQuestions && (
        <div className="md:ml-auto mlg:ml-0 lgd:ml-auto">
          <MainButton
            onClick={() => navigate(`../${subject}/${gradeClass}/${idInt + 1}`)}
          >
            Next Question
          </MainButton>
        </div>
      )}

      {idInt === numberOfQuestions && (
        <div className="md:ml-auto mlg:ml-0 lgd:ml-auto">
          <MainButton
            onClick={() => {
              if (submitCount <= 1) {
                setSubmitCount(submitCount + 1)
                toast.warning("You cannot edit your answers after this step");
                return
              }
              // submit answers
              setTimeout(() => {
                navigate(`../../../dashboard`);
              }, 2000);
            }}
          >
            Submit Answers And Proceed
          </MainButton>
        </div>
      )}
    </div>
  );
};
