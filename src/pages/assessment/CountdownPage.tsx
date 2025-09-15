const CountdownPage = ({ countdown }: { countdown: number }) => {
  return (
    <div className="md:border-2 p-4 rounded-md flex items-center justify-center h-full ">
      <div className="flex-col gap-12 shrink-0 max-w-md flex items-center justify-center text-4xl font-semibold">
        Test starts in {countdown}...
      </div>
    </div>
  );
};

export default CountdownPage;
