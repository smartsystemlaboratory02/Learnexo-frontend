type FloatingfCircleProps = {
  position: string;
  size: string;
  color: string;
};

const FloatingCircle: React.FC<FloatingfCircleProps> = ({
  position,
  size,
  color,
}) => {
  return (
    <div
      className={`rounded-full fixed bg-${color} ${position} w-${size} h-${size}`}
    ></div>
  );
};

export default FloatingCircle;
