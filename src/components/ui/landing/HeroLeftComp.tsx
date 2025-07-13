import tailoredImg from "../../../assets/images/tailored_subjects.png";
import management from "../../../assets/images/management.png";
import vrLady from "../../../assets/images/vr-lady.png";
import type { ChildrenProps } from "../../../utils/types/baseTypes";
import progress from "../../../assets/images/progress-circle.png";

const HeroLeftComp = () => {
  return (
    <div className="relative w-fit mx-16">
      <span className="absolute top-1/3 -left-30">
        <FloatingModal title="All Tailored Subjects">
          <img src={tailoredImg} alt="TailoredImg" />
        </FloatingModal>
      </span>
      <span className="absolute top-4/5 -right-16">
        <FloatingModal title="Learning management">
          <img src={management} alt="Learning management" />
        </FloatingModal>
      </span>
      <span className="absolute -right-4">
        <FloatingModalVert />
      </span>

      <div className="relative w-[500px] h-[500px] rounded-full">
        <div className="w-full h-full absolute -top-6 -left-6 border border-blue-3 -z-20 rounded-full" />
        <div className="w-full h-full rounded-full overflow-hidden relative -z-10 bg-blue-3">
          <img
            src={vrLady}
            alt="vr-girl"
            className="absolute bottom-0 left-12"
          />
        </div>
      </div>
    </div>
  );
};

type floatingModalProps = ChildrenProps & {
  title: string;
};
const FloatingModal: React.FC<floatingModalProps> = ({ children, title }) => {
  return (
    <div className="flex gap-6 p-[18px] rounded-[18px] items-center border-blue-3 border bg-gray-5 w-fit">
      <div className="w-fit h-fit p-1.5 bg-blue-3 rounded-xl">{children}</div>
      <p className="text-[15px] text-gray-400 max-w-25">{title}</p>
    </div>
  );
};

const FloatingModalVert = () => {
  return (
    <div className="flex gap-3 p-[18px] rounded-[18px] items-center border-blue-3 border bg-gray-5 w-fit flex-col">
      <img src={progress} alt="progress" />
      <p className="font-bold text-2xl">5k+</p>
      <p className="text-[15px] text-gray-400">Assessments</p>
    </div>
  );
};

export default HeroLeftComp;

