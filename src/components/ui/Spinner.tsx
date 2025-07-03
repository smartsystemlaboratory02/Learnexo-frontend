import { Loader } from "lucide-react";

type SpinnerProps = {
  dark?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ dark }) => {
  return (
    <Loader className="animate-spin mx-auto" color={`${dark ? "#0D47A1" : "#fff"}`} />
  );
};

export default Spinner;
