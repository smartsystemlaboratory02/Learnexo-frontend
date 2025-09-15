import BentoBox from "./BentoBox";
import { Link } from "react-router-dom";
import VerticalDropdown from "./VerticalDropdown";
import book from "../../../assets/icons/book.png";

type SubjectRecommendationProps = {
  subject: string;
  // topic: string;
  to: string;
};

const SubjectRecommendation: React.FC<SubjectRecommendationProps> = ({
  subject,
  // topic,
  to,
}) => {
  return (
    <BentoBox>
      <div className="flex justify-between items-center pb-3 border-b-gray-4 border-b min-w-50 w-full shrink-0 ">
        <div className="flex gap-4 items-center">
          <img src={book} alt={subject} />
          <p className="font-medium capitalize leading-[20px] text-sm">
            {subject}
          </p>
        </div>
        <VerticalDropdown />
      </div>
      <div className="flex justify-between items-center py-2">
        {/* <p className="text-gray-500 text-xs">{topic}</p> */}
        <Link
          to={to}
          className="bg-blue-3 text-white px-2.5 py-0.5 text-[10px]"
        >
          Start
        </Link>
      </div>
    </BentoBox>
  );
};

export default SubjectRecommendation;
