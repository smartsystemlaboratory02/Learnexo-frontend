import { useEffect, useState } from "react";
import type { ChildrenProps } from "../../../utils/types/baseTypes";
import { ChevronRight } from "lucide-react";

type HowItWorksBentoProps = ChildrenProps & {
  title: string;
  info: string;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const HowItWorksBento: React.FC<HowItWorksBentoProps> = ({
  title,
  info,
  selected,
  setSelected,
  index,
  children,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected === index);

  useEffect(() => {
    console.log(selected, index);
    
    setIsSelected(selected === index);
  }, [selected]);

  return (
    <div
      className={`flex flex-col gap-8 py-8 px-10 w-1/3 min-w-xs rounded-2xl ${
        isSelected ? "bg-blue-3" : "border bg-white border-gray-3 shadow-sm"
      }`}
      onClick={() => setSelected(index)}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-4 rounded-xl ${
            isSelected ? "bg-white-2" : "bg-blue-3/20"
          }`}
        >
          {children}
        </div>
        <p
          className={`font-bold leading-[150%] tracking-[2%] text-2xl ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
      </div>

      <p
        className={`tracking-[180%] ${
          isSelected ? "text-white" : "text-purple-2"
        }`}
      >
        {info}
      </p>

      <div className="flex items-center gap-4">
        <p
          className={`text-lg leading-[140%] tracking-[2%] font-medium ${
            isSelected ? "text-white" : "text-blue-3"
          }`}
        >
          Learn More
        </p>
        <ChevronRight color={`${isSelected ? "white" : "#0D47A1"}`} />
      </div>
    </div>
  );
};

export default HowItWorksBento;
