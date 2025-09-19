import { useRequest } from "../hooks/useRequest";

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
