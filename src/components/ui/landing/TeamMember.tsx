import { Link } from "react-router-dom";
import type { TeamMemberType } from "../../../pages/landing/data";
import type { ChildrenProps } from "../../../utils/types/baseTypes";
import xicon from "../../../assets/images/x-icon.png";
import linkedinicon from "../../../assets/images/linkedin-icon.png";

type TeammemberProps = ChildrenProps & Omit<TeamMemberType, "img">;

const TeamMember: React.FC<TeammemberProps> = ({
  children,
  job,
  name,
  role,
  linkedin,
  x,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-[#F9FAFB] text-center max-w-xs">
      <div className="w-3/5">{children}</div>
      <div>
        <p className="text-black font-medium text-lg leading-[28px]">{name}</p>
        <p className="text-green-1 leading-[28px] mb-2">{role}</p>
        <p className="text-gray-2 leading-[28px] mb-4">{job}</p>
      </div>
      <div className="flex gap-2 w-fit mx-auto">
        {x && (
          <Link to={x} target="_blank" className="w-fit h-fit">
            <img src={xicon} alt="x" />
          </Link>
        )}
        {linkedin && (
          <Link to={linkedin} target="_blank" className="w-fit h-fit">
            <img src={linkedinicon} alt="linkedin" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
