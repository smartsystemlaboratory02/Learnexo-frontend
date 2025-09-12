import { Link } from "react-router-dom";
import bigBlue from "../../assets/images/big-blue-arc.png";
import smallBlue from "../../assets/images/small-blue-arc.png";

const StartToday = () => {
  return (
    <div className="bg-green-1/2 py-12 px-6 lg:py-36 relative mt-8 flex items-center flex-col z-20 gap-[30px]">
      <img src={bigBlue} alt="" className="absolute top-0 right-0 -z-10" />
      <img src={smallBlue} alt="" className="absolute top-0 right-0 -z-10" />

      <h3 className="text-3xl md:text-5xl leading-[48px] z-20 text-center text-black">
        Start Learning Smarter — Today.
      </h3>

      <p className="text-base md:text-xl leading-[32px] text-[#425466] z-20 text-center">
        Whether you're learning alone, teaching a class, or supporting a child —
        Learnexo grows with you.
      </p>

      <div className="flex flex-1 w-2/5 min-w-[320px]">
        <input
          type="email"
          className="border border-[#667085] rounded-l-xl p-2 flex-1 outline-0 focus:outline-1"
          placeholder="Enter your email address"
          name="join"
        />

        <button className="bg-blue-3 mix-blend-color-dodge hover:outline-1 text-white border-0 py-3 px-8 rounded-r-lg text text-sm font-semibold leading-[20px]">
          <Link to="/onboarding/auth/signup">Join Now</Link>
        </button>
      </div>
    </div>
  );
};

export default StartToday;
