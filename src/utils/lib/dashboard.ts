import type {
  SingleActivityType,
  SingleCourseProgressType,
} from "../types/dashboard";

export const courseProgress: SingleCourseProgressType[] = [
  { perc: 55, to: "/dashboard", topic: "quadratic equations" },
  { perc: 39, to: "/dashboard", topic: "idiomatic expressions" },
];

export const activityFeed: SingleActivityType[] = [
  {
    title: "Completed an Assessment",
    to: "/dashboard",
    topic: "Onboarding",
  },
  {
    title: "Earned",
    to: "/dashboard",
    topic: "Latest Learner Badge",
  },
  {
    title: "Signed In successfully",
    to: "/dashboard",
    topic: "Onboarding",
  },
  {
    title: "Signed Up successfully",
    to: "/dashboard",
    topic: "Onboarding",
  },
];
