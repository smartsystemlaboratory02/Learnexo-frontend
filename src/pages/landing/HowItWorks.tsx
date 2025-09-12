import { useState } from "react";
import howitworks from "../../assets/images/how-it-works.png";
import HowItWorksStep from "../../components/ui/landing/HowItWorksStep";
import HowItWorksBento from "../../components/ui/landing/HowItWorksBento";
import { howItWorksBentos, howItWorksSteps } from "./data";
import ActiveDot from "../../components/ui/landing/ActiveDot";

const HowItWorks = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  return (
    <div className="px-16 py-12">
      <div className="flex flex-col w-fit items-center mx-auto gap-[14px] ">
        <img src={howitworks} alt="How it works" />
        <h2 className="capitalize text-black font-extrabold text-[40px] leading-[48px] tracking-[-3%]">
          How it works
        </h2>
        <p className="text-purple-2 leading-[35px] tracking-[-2px] text-xl">
          Smart Learning That Adapts to You
        </p>
      </div>

      <div className="px-12 py-16 flex flex-wrap justify-center gap-6 items-center">
        {howItWorksSteps.map((step, index) => {
          const { title, info, img } = step;
          return (
            <HowItWorksStep title={title} step={`${index + 1}`} info={info}>
              <img src={img} alt="step" />
            </HowItWorksStep>
          );
        })}
      </div>

      <div className="flex flex-col items-center text-center gap-10">
        <h3 className="text-blue-4 font-semibold text-[36px]">
          Personalized. Inclusive. Powered by AI.
        </h3>

        <p className="text-purple-2 text-xl leading-[30px] max-w-[850px]">
          Learnexo is an adaptive EdTech platform that personalizes every
          learner's journey using cutting-edge technologies
        </p>
      </div>

      <div className="flex gap-10 pt-10 flex-wrap justify-center">
        {howItWorksBentos.map((bento, index) => {
          const { title, info, img } = bento;

          return (
            <HowItWorksBento
              title={title}
              info={info}
              selected={selectedOption}
              setSelected={setSelectedOption}
              index={index + 1}
            >
              <img src={img} alt={title} />
            </HowItWorksBento>
          );
        })}
      </div>

      <div className="flex w-fit mx-auto gap-4 mt-10">
        <ActiveDot selected={selectedOption} index={1} />
        <ActiveDot selected={selectedOption} index={2} />
        <ActiveDot selected={selectedOption} index={3} />
      </div>
    </div>
  );
};

export default HowItWorks;
