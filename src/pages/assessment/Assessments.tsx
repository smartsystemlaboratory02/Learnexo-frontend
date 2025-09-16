import BentoBox from "@/components/ui/dashboard/BentoBox";
import { Link } from "react-router-dom";

const Assessments = () => {
  return (
    <div className="border p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-center">
        Choose Assessment Subject
      </h1>

      <BentoBox>
        <Link to="/assessment/english/1">
          <p className="text-2xl font-semibold">English Language</p>
        </Link>
      </BentoBox>

      <BentoBox>
        <Link to="/assessment/english/1">
          <p className="text-2xl font-semibold">Mathematics</p>
        </Link>
      </BentoBox>
    </div>
  );
};

export default Assessments;
