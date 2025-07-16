const HeroRightComp = () => {
  return (
    <div className="">
      <h1 className="text-6xl font-bold text-blue-4 leading-[82px] tracking-[-0.5px] mb-5">
        AI-Powered <span className="text-blue-3">Learning</span> for Every{" "}
        <span className="text-purple-1">Students</span>
      </h1>

      <p className="leading-[180%] text-[#646464] mb-9">
        Unleash your potential with Learnexo — a personalized, inclusive
        learning platform powered by AI, designed to adapt to your pace, style,
        and needs.
      </p>

      <div className="flex gap-7">
        <button className="bg-blue-3 text-white font-bold py-4 px-7 rounded-2xl hover:scale-105 transition-all duration-300 border-4 border-pink-1">
          Start Learning
        </button>

        <button className="bg-green-4 text-green-2 font-bold py-4 px-7 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xs capitalize border border-[#EAFFF9]">
          See how it works
        </button>
      </div>
    </div>
  );
};

export default HeroRightComp;
