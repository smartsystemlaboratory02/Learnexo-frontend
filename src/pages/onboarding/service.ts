import type { Option } from "../../utils/types/baseTypes";

export const roleOptions: Option[] = [
  { value: "student", label: "Student" },
  { value: "teacher", label: "Teacher" },
  { value: "gaurdian", label: "Gaurdian" },
  { value: "administrator", label: "Administrator" },
];

export const genderOptions: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const languageOptions: Option[] = [
  { value: "english", label: "English" },
  { value: "yoruba", label: "Yoruba" },
  { value: "hausa", label: "Hausa" },
  { value: "igbo", label: "Igbo" },
];

export const subjectsOptions: Option[] = [
  { value: "maths", label: "Maths" },
  { value: "english", label: "English" },
];

// export const questions: BaseQuestion[] = [
//   {
//     question: "Which sentence is grammatically correct?",
//     options: [
//       { label: "a", value: "She don't like coffee very much." },
//       { label: "b", value: "She doesn't likes coffee very much." },
//       { label: "c", value: "She doesn't like coffee very much." },
//       { label: "d", value: "She not like coffee very much." },
//     ],
//     index: 1,
//   },
//   {
//     question: "Choose the correct past tense form:",
//     options: [
//       { label: "a", value: "I have went to the store yesterday." },
//       { label: "b", value: "I went to the store yesterday." },
//       { label: "c", value: "I go to the store yesterday." },
//       { label: "d", value: "I was went to the store yesterday." },
//     ],
//     index: 2,
//   },
//   {
//     question: "What is the meaning of the word 'abundant'?",
//     options: [
//       { label: "a", value: "Scarce or limited" },
//       { label: "b", value: "Existing in large quantities; plentiful" },
//       { label: "c", value: "Difficult to understand" },
//       { label: "d", value: "Moving very quickly" },
//     ],
//     index: 3,
//   },
//   {
//     question: "Which sentence uses the correct preposition?",
//     options: [
//       { label: "a", value: "I am good in mathematics." },
//       { label: "b", value: "I am good on mathematics." },
//       { label: "c", value: "I am good at mathematics." },
//       { label: "d", value: "I am good with mathematics." },
//     ],
//     index: 4,
//   },
//   {
//     question: "Choose the sentence with correct subject-verb agreement:",
//     options: [
//       { label: "a", value: "The group of students are studying hard." },
//       { label: "b", value: "The group of students is studying hard." },
//       { label: "c", value: "The group of students were studying hard." },
//       { label: "d", value: "The group of students have studying hard." },
//     ],
//     index: 5,
//   },
// ];

export const gradeOptions: Option[] = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
  { label: "D", value: "d" },
  { label: "E", value: "e" },
];

export const classOptions: Option[] = [
  { label: "JSS One", value: "JSS 1" },
  { label: "JSS Two", value: "JSS 2" },
  { label: "JSS Three", value: "JSS 3" },
  { label: "SSS One", value: "SSS 1" },
  { label: "SSS Two", value: "SSS 2" },
  { label: "SSS Three", value: "SSS 3" },
];

export const learningStyleOptions: Option[] = [
  { label: "Visual", value: "visual" },
  { label: "Auditory", value: "auditory" },
  { label: "Reading and writing", value: "reading-writing" },
  { label: "Kinesthetic", value: "kinesthetic" },
];

export const handleSelect = (
  questionIndex: number,
  answer: string,
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>
) => {
  setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
};
