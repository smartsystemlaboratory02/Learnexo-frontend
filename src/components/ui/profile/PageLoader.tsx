import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const PageLoader = ({state, setState}) => {

  useEffect(() => {
    const timer = setInterval(() => setState((prev) => prev + 5), 500);
    return () => clearInterval(timer);
  }, []);

  return <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center flex-col gap-2">
      <Progress value={state} className="w-[60%]" />
      <p className="font-semibold font-2xl=l">Preparing learning plans based on assessment results ...</p>
  </div>
};

export default PageLoader;
