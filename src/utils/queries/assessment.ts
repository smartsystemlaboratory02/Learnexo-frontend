import { useRequest } from "../hooks/useRequest";
import { type Answer } from "../types/baseTypes";

type AssessmentRequest = {
  subject: string;
  gradeClass: string;
};

export const getAssessmentRequest = async ({
  subject,
  gradeClass,
}: AssessmentRequest) => {
  return await useRequest(`/assessment/${subject}/${gradeClass}`);
};

export const getAssessmentScore = async (answers: Answer[]) => {
  return await useRequest(
    "/assessment/get-score",
    "POST",
    JSON.stringify(answers)
  );
};
