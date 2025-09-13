import { useNavigate, useParams } from "react-router-dom";
import HeaderText from "../../components/HeaderText";
import { handleSelect } from "../../service";
import TestInstruction from "../../../../components/ui/TestInstruction";
import Question from "../../../../components/ui/Question";
import { useState } from "react";
import type { BaseQuestion } from "../../../../utils/types/baseTypes";
import MainButton from "../../../../components/ui/MainButton";
// import { useQuery } from "@tanstack/react-query";
// import { assessmentsRequest } from "@/utils/queries/auth";
// import Spinner from "@/components/ui/Spinner";
import { transformQuestion } from "@/utils/funcs";
import { toast } from "sonner";
import { academicQuestions } from "@/utils/lib/academictest";

const AcademicTest = () => {
  const { id } = useParams<{ id: string }>();
  const idInt = parseInt(id ?? "");
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // const {
  //   data: questions,
  //   isPending,
  //   isSuccess,
  //   error,
  // } = useQuery({
  //   queryKey: ["academicquestions"],
  //   queryFn: assessmentsRequest,
  //   staleTime: 1000 * 60 * 5,
  // });

  // if (!id || isNaN(idInt)) {
  //   return <div>Question not found</div>;
  // }

  // if (isPending) {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );
  // }

  // if (error) return <div>An error has occurred: {error.message}</div>;

  // if (!isSuccess || !questions.data || !Array.isArray(questions.data)) {
  //   return <div>No questions found</div>;
  // }

  const numberOfQuestions = academicQuestions.data.length;
  console.log(academicQuestions, numberOfQuestions, idInt);

  const mapOptionsObjectToArray = (
    optionsObj: Record<string, string>
  ): string[] => {
    // Ensure order: a, b, c, d, e
    return ["a", "b", "c", "d", "e"].map((key) => optionsObj[key]);
  };

  const questions = academicQuestions.data.map((q) => ({
    ...q,
    options: mapOptionsObjectToArray(q.options),
  }));

  const question = questions
    .map(transformQuestion)
    .find((q: BaseQuestion) => q.index === idInt);

  if (!question) {
    return <div>Question not found</div>;
  }

  const questionObject: BaseQuestion & {
    selected: string;
    setSelected: (value: string) => void;
  } = {
    ...question,
    selected: answers[question.index] ?? "",
    setSelected: (value: string) =>
      handleSelect(question.index, value, setAnswers),
  };

  return (
    <div className="flex flex-col gap-6">
      <HeaderText title="Academic Test - English Language - JSS 2" />
      <TestInstruction numberOfQuestions={numberOfQuestions}>
        From the multiple choice questions, you are to choose answer between
        option A - E
      </TestInstruction>

      <Question questionObject={questionObject} />

      <div className="flex gap-4 flex-col md:flex-row mlg:flex-col lgd:flex-row justify-between">
        {idInt > 1 && (
          <div className="md:mr-auto mlg:mr-0 lgd:mr-auto">
            <MainButton
              white
              onClick={() => navigate(`../academictest/${idInt - 1}`)}
            >
              Previous Question
            </MainButton>
          </div>
        )}
        {idInt < numberOfQuestions && (
          <div className="md:ml-auto mlg:ml-0 lgd:ml-auto">
            <MainButton
              onClick={() => navigate(`../academictest/${idInt + 1}`)}
            >
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
                  navigate(`../questionnairetest/${numberOfQuestions + 1}`);
                }, 2000);
              }}
            >
              Submit Answers And Proceed
            </MainButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicTest;
