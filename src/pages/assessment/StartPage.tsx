import MainButton from "@/components/ui/MainButton";
import HeaderText from "../onboarding/components/HeaderText";
// import TestInstruction from "@/components/ui/TestInstruction";

const StartPage = ({
//   numberOfQuestions,
  setStarted,
}: {
  numberOfQuestions: number;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="md:border-2 p-4 rounded-md flex items-center justify-center h-full ">
      <div className="flex-col gap-12 max-w-md flex items-center justify-center">
        <HeaderText title="English Assessment" />
        <p className="text-center">
          This test will last for 20 minutes. Make sure you are in a silent area
          where you can concentrate on the assessment{" "}
        </p>
        <p className="text-lg font-semibold">Goodluck, Username!</p>
        <MainButton onClick={() => setStarted(true)}>
          Start English Assessment
        </MainButton>{" "}
        {/* Get subject info into state */}
      </div>
    </div>
  );
};

export default StartPage;
