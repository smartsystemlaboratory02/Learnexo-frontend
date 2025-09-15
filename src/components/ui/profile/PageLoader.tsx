import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

type PageLoaderProps = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const PageLoader:React.FC<PageLoaderProps> = ({state, setState}) => {

  useEffect(() => {
    const timer = setInterval(() => setState((prev) => prev + 20), 500);
    return () => clearInterval(timer);
  }, []);

  return <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center flex-col gap-2 z-60">
      <Progress value={state} className="w-[60%]" />
      <p className="font-semibold font-2xl=l">Preparing your dashboard ...</p>
  </div>
};

export default PageLoader;
