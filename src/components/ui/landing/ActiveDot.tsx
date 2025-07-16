import { useEffect, useState } from "react";

type ActiveDotsProps = {
  selected: number;
  index: number;
};

const ActiveDot: React.FC<ActiveDotsProps> = ({ selected, index }) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected === index);

  useEffect(() => {
    setIsSelected(selected === index);
  }, [selected]);

  return (
    <div
      className={`rounded-full h-4 ${
        isSelected ? "w-12 bg-blue-3" : "w-4 bg-gray-3"
      }`}
    />
  );
};

export default ActiveDot;
