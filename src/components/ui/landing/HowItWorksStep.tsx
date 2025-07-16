import type { ChildrenProps } from "../../../utils/types/baseTypes";

type HowItWorksStepProps = ChildrenProps & {
  step: string;
  title: string;
  info: string;
};

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  step,
  title,
  info,
  children,
}) => {
  return (
    <div className="flex flex-col gap-14 max-w-[320px] items-center">
      <div className="relative bg-white rounded-full shadow-2xl flex items-center justify-center w-[160px] h-[160px]">
        <div className="absolute bg-gray-5 rounded-full text-black flex items-center justify-center font-bold w-10 h-10 -top-5 -left-5">
          {step}
        </div>
        {children}
      </div>

      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-semibold leading-[115%] tracking-[-5%]">
          {title}
        </h1>
        <p className="text-purple-2 leading-[32px] tracking-[-2%]">{info}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
