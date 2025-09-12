import type { ChildrenProps } from "../../../utils/types/baseTypes";

type CircleProps = {
  position?: string;
};

const ConcentricCircles:React.FC<CircleProps> = ({position}) => {
  return (
    <div className={`fixed ${position}`}>
      <Circle>
        <Circle>
          <Circle>
            <div className="border border-blue-3/30 lg:w-36 w-24 md:w-28 rounded-full aspect-square" />
          </Circle>
        </Circle>
      </Circle>
    </div>
  );
};

const Circle: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="w-fit h-fit rounded-full border border-blue-3/30 p-6 md:p-10 lgd:p-12">
      {children}
    </div>
  );
};

export default ConcentricCircles;
