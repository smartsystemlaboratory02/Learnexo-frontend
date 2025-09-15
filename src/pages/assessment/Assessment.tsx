import Question from "@/components/ui/Question";
import React, { useEffect, useState } from "react";
import { academicQuestions } from "@/utils/lib/academictest";
import { useNavigate, useParams } from "react-router-dom";
import { transformQuestion } from "@/utils/funcs";
import TestInstruction from "@/components/ui/TestInstruction";
// import HeaderText from "../onboarding/components/HeaderText";
import MainButton from "@/components/ui/MainButton";
import type { BaseQuestion } from "@/utils/types/baseTypes";
import { toast } from "sonner";
import StartPage from "./StartPage";
import CountdownPage from "./CountdownPage";

const Assessment = () => {
  const { subject, id } = useParams<{ subject: string; id: string }>();
  console.log(subject, id);
  const idInt = parseInt(id ?? "");
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  if (!id || isNaN(idInt))
    return (
      <div className="h-full flex flex-col items-center justify-center  max-w-sm mx-auto gap-6">
        <p className="text-2xl font-semibold">Question not found</p>
        <MainButton onClick={() => navigate(-1)}>Go Back</MainButton>
      </div>
    );
  // if (isPending) return <Spinner />;
  // if (error) return <div>Error: {error.message}</div>;
  // if (!data?.data || !Array.isArray(data.data))
  //   return <div>No questions found</div>;

  const questions = academicQuestions.data.map(transformQuestion);
  const numberOfQuestions = questions.length;

  useEffect(() => {
    if (!started) return;
    if (countdown <= 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, countdown]);

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

  const question = questions.find((q: BaseQuestion) => q.index === idInt);
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
    selected: answers[question.index] ?? "",
    setSelected: (val: string) =>
      setAnswers((prev) => ({ ...prev, [question.index]: val })),
  };

  return (
    <div className="md:border-2 p-4 rounded-md flex h-full justify-center items-center">
      <div className="gap-12 max-w-lg flex flex-col">
        <TestInstruction numberOfQuestions={numberOfQuestions}>
          From the multiple choice questions, you are to choose answers between
          option A - E
        </TestInstruction>
        <Question questionObject={questionObject} />
        <Navigation idInt={idInt} numberOfQuestions={numberOfQuestions} />
      </div>
    </div>
  );
};

export default Assessment;

const Navigation: React.FC<{ idInt: number; numberOfQuestions: number }> = ({
  idInt,
  numberOfQuestions,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 flex-col md:flex-row mlg:flex-col lgd:flex-row justify-between">
      {idInt > 1 && (
        <div className="md:mr-auto mlg:mr-0 lgd:mr-auto">
          <MainButton
            white
            onClick={() => navigate(`../assessment/${idInt - 1}`)}
          >
            Previous Question
          </MainButton>
        </div>
      )}
      {idInt < numberOfQuestions && (
        <div className="md:ml-auto mlg:ml-0 lgd:ml-auto">
          <MainButton onClick={() => navigate(`../assessment/${idInt + 1}`)}>
            Next Question
          </MainButton>
        </div>
      )}
      {idInt === numberOfQuestions && (
        <div className="md:ml-auto mlg:ml-0 lgd:ml-auto">
          <MainButton
            onClick={() => {
              toast.warning("You cannot edit your answers after this step");
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
