import type { ChildrenProps } from "../../../utils/types/baseTypes";

type CircleProps = {
  position?: string;
};

const ConcentricCircles:React.FC<CircleProps> = ({position}) => {
  return (
    <div className={`fixed ${position} -z-10`}>
      <Circle>
        <Circle>
          <Circle>
            <div className="border border-blue-3/30 w-36 h-36 rounded-full" />
          </Circle>
        </Circle>
      </Circle>
    </div>
  );
};

const Circle: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="w-fit h-fit rounded-full border border-blue-3/30 p-12">
      {children}
    </div>
  );
};

export default ConcentricCircles;
