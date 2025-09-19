import Activities from "../../components/ui/dashboard/Activities";
import SubjectRecommendation from "../../components/ui/dashboard/SubjectRecommendation";
import MetricBento from "../../components/ui/dashboard/MetricBento";
import { activityFeed } from "../../utils/lib/dashboard";
import ActivitiesTable from "@/components/ui/dashboard/AssessmentsTable";
import PageLoader from "@/components/ui/profile/PageLoader";
import { useState } from "react";
import { getLocalStorage } from "@/utils/hooks/getSessionStorage";

const Dashboard = () => {
  const [progress, setProgress] = useState(20);
  const recommendations = getLocalStorage("assessment_reccs", null);

  return (
    <div className="">
      {progress <= 100 && (
        <PageLoader state={progress} setState={setProgress} />
      )}

      <div className="flex gap-6 justify-between md:border p-6 rounded-md">
        <div className="flex flex-col gap-4 w-full">
          <h2 className=" text-lg font-semibold leading-5">Status Updates</h2>
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
              <SubjectRecommendation
                subject="mathematics"
                to="/assessment/ENGLISH_LANGUAGE/JSS2/1"
              />
              <SubjectRecommendation
                subject="english"
                to="/assessment/ENGLISH_LANGUAGE/JSS2/1"
              />
            </div>
          </div>

          <ActivitiesTable recommendations={recommendations}/>
          <Activities title="Activity Feed" activities={activityFeed} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
