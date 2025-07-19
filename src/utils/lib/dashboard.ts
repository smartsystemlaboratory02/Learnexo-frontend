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
    title: "Completed Lesson 10",
    to: "/dashboard",
    topic: "Trigonometry & Ratio",
  },
  {
    title: "Earned",
    to: "/dashboard",
    topic: "Top score in Communication",
  },
  {
    title: "Completed Assessment",
    to: "/dashboard",
    topic: "Pythagoras Theorem",
  },
  {
    title: "Completed Lesson 10",
    to: "/dashboard",
    topic: "Trigonometry & Ratio",
  },
];
