import { Link } from "react-router-dom";
import BentoBox from "./BentoBox";
import SingleCourseProgress from "./SingleCourseProgress";
import type { SingleCourseProgressType } from "../../../utils/types/dashboard";

type CourseProgressProps = {
  title: string;
  courses: SingleCourseProgressType[];
};

const CourseProgress: React.FC<CourseProgressProps> = ({ title, courses }) => {
  return (
    <BentoBox>
      <div>
        <p className="w-full pb-2  border-b border-b-gray-4 font-medium capitalize text-sm">
          {title}
        </p>
        <div className="flex flex-col gap-3 items-center py-2 border-b mb-2 border-b-gray-6">
          {courses.map((course) => {
            const { topic, perc, startTimeInMins } = course;
            return (
              <SingleCourseProgress
                to="/dashboard"
                topic={topic}
                perc={perc}
                startTimeInMins={startTimeInMins}
              />
            );
          })}
        </div>
        <Link
          to="/dashboard"
          className="text-purple-1 hover:underline w-full block text-right text-[10px] leading-3.5"
        >
          See more...
        </Link>
      </div>
    </BentoBox>
  );
};

export default CourseProgress;
