import ai from "../../assets/images/ai.png";
import gamified from "../../assets/images/gamified.png";
import personalized from "../../assets/images/personalized.png";
import profile from "../../assets/images/profile-circle.png";
import flash from "../../assets/images/flash.png";
import setting from "../../assets/images/setting.png";

type HowItWorksBento = {
  topic: string;
  info: string;
  img: string;
};

type HowItWorksSteps = {
  title: string;
  info: string;
  img: string;
};

export const howItWorksBentos: HowItWorksBento[] = [
  {
    topic: "AI-Generated Learning Paths",
    info: "Lessons on artificial intelligences inclined courses that cover......",
    img: ai,
  },
  {
    topic: "Personalized Learning",
    info: "Classes in development that cover the most recent advancements in web.",
    img: personalized,
  },
  {
    topic: "Gamified Challenges",
    info: "User Interface Design courses that cover the most recent  trends",
    img: gamified,
  },
];

export const howItWorksSteps: HowItWorksSteps[] = [
  {
    title: "Personalize",
    info: "Take a simple assessment. Our AI builds a custom learning path based on your goals and abilities.",
    img: profile,
  },
  {
    title: "Engage",
    info: "Take a simple assessment. Our AI builds a custom learning path based on your goals and abilities.",
    img: setting,
  },
  {
    title: "Grow",
    info: "Take a simple assessment. Our AI builds a custom learning path based on your goals and abilities.",
    img: flash,
  },
];
