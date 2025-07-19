import LearningReccomendation from "../../components/ui/dashboard/LearningReccomendation";
import MetricBento from "../../components/ui/dashboard/MetricBento";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 w-full">
        <MetricBento topic="today's goal" info="Practice 5 questions today" />
        <MetricBento topic="courses in progress" metric="14" />
        <MetricBento topic="assessment quest" metric="91" />
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        <LearningReccomendation
          subject="mathematics"
          topic="Quadratic equations"
          to="/dashboard"
        />
          <LearningReccomendation
            subject="english"
            topic="Idiomatic expressions"
            to="/dashboard"
          />
        <LearningReccomendation
          subject="mathematics"
          topic="Quadratic equations"
          to="/dashboard"
        />
      </div>
    </div>
  );
};

export default Dashboard;
