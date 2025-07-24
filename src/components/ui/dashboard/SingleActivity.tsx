import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { SingleActivityType } from "../../../utils/types/dashboard";

const SingleActivity: React.FC<SingleActivityType> = ({ title, topic, to }) => {
  return (
    <Link
      to={to}
      className="flex gap-3 items-center w-full hover:bg-gray-2 border-t border-t-gray-3 px-2 py-2 pr-6 "
    >
      <BadgeCheck fill="#0D47A1" color="white" />
      <div className="flex flex-col gap-2">
        <p className="font-medium text-sm leading-5 capitalize">{title}</p>
        <p className="text-xs text-gray-6 leading-4 capitalize">{topic}</p>
      </div>
    </Link>
  );
};

export default SingleActivity;
