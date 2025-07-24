import { Link } from "react-router-dom";
import type { SingleCourseProgressType } from "../../../utils/types/dashboard";

const SingleCourseProgress: React.FC<SingleCourseProgressType> = ({
  topic,
  perc,
  startTimeInMins,
  to,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-center">
        <p className="text-gray-6 text-xs leading-5 capitalize">{topic}</p>
        <p className="text-blue-2 text-sm leading-5">{perc}%</p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="w-3/5 h-1.5 bg-gray-4 rounded-full">
          <div
            className={`h-full rounded-full ${
              perc <= 50 ? "bg-red-700" : "bg-blue-3"
            }`}
            style={{ width: `${perc}%` }}
          ></div>
        </div>

        <Link
          to={to}
          className="bg-blue-3 text-white px-2.5 py-0.5 text-[10px] rounded-xs"
        >
          {perc > 50 || startTimeInMins === undefined
            ? "Continue"
            : `Starts in ${(startTimeInMins / 60).toFixed(0)} hr${
                startTimeInMins / 60 !== 1 ? "s" : ""
              }`}
        </Link>
      </div>
    </div>
  );
};

export default SingleCourseProgress;
