import type { ChildrenProps } from "../../../utils/types/baseTypes";

const BentoBox: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="shadow-md rounded-md p-4 border border-[#EAECF0] hover:shadow-lg cursor-pointer">
      {children}
    </div>
  );
};

export default BentoBox;
