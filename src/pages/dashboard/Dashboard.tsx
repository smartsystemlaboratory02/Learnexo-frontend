import Activities from "../../components/ui/dashboard/Activities";
import SubjectRecommendation from "../../components/ui/dashboard/SubjectRecommendation";
import MetricBento from "../../components/ui/dashboard/MetricBento";
import { activityFeed } from "../../utils/lib/dashboard";
import ActivitiesTable from "@/components/ui/dashboard/AssessmentsTable";
import PageLoader from "@/components/ui/profile/PageLoader";
import { useState } from "react";

const Dashboard = () => {
  const [progress, setProgress] = useState(20);

  return (
    <div className="">
      {progress <= 100 && (
        <PageLoader state={progress} setState={setProgress} />
      )}

      <div className="flex gap-4 justify-between border-2 p-4 rounded-md">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="mb-4 font-semibold leading-5">Status Update</h2>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            <MetricBento
              topic="today's goal"
              info="Practice 5 questions today"
            />
            <MetricBento topic="courses in progress" metric="0" />
            <MetricBento topic="assessment quest" metric="0" />
          </div>

          <div>
            <h2 className="mb-4 font-semibold leading-5">
              Subjects Recommendation
            </h2>
            <div className="flex flex-wrap gap-6 w-full justify-center sm:justify-start">
              <SubjectRecommendation subject="mathematics" to="/dashboard" />
              <SubjectRecommendation subject="english" to="/dashboard" />
            </div>
          </div>

          <ActivitiesTable />
          <Activities title="Activity Feed" activities={activityFeed} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
