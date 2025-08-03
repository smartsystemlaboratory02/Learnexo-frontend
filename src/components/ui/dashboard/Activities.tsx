import type { SingleActivityType } from "../../../utils/types/dashboard";
import SingleActivity from "./SingleActivity";

type ActivitiesProps = {
  title: string;
  activities: SingleActivityType[];
};

const Activities: React.FC<ActivitiesProps> = ({ title, activities }) => {
  return (
    <div className=" border-gray-3 border rounded-md w-fit h-fit min-w-60 overflow-hidden">
      <div className="w-full p-3">
        <p className="text-lg leading-7 font-medium capitalize">{title}</p>
      </div>
      <div className="flex flex-col">
        {activities.map((activity) => {
          const { title, topic, to } = activity;
          return <SingleActivity title={title} topic={topic} to={to} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
