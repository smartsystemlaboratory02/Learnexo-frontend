import { Link } from "react-router-dom";
import Logo from "../Logo";
import Navbar from "./Navbar";
import Search from "../form/Search";

const HeroHeader = () => {
  return (
    <div className="md:px-4 xl:px-10 py-6 flex items-center justify-between shadow-sm gap-6">
      <Logo />

      <div className="flex mx-14 items-center gap-8">
        <Search placeholder="Want to learn?" name="landing-search"/>
        <Navbar />
      </div>

      <div className="flex items-center gap-4 w-full text-sm justify-end">
        <Link to={"/onboarding/auth/signup"}>Sign in</Link>
        <button className=" bg-blue-3 text-white font-bold py-2.5 px-4 rounded-2xl hover:scale-105 transition-all duration-300 border-4 border-pink-1">
          <Link to={"/onboarding/auth/login"}>Create free account</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
