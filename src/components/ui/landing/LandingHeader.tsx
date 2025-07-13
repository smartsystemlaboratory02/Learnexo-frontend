import { Link } from "react-router-dom";
import Logo from "../Logo";
import Navbar from "./Navbar";
import Search from "./Search";

const HeroHeader = () => {
  return (
    <div className="px-16 py-6 flex items-center border justify-between">
      <Logo />

      <div className="flex mx-14 items-center gap-8">
        <Search />
        <Navbar />
      </div>

      <div className="flex items-center gap-4">
        <Link to={"/onboarding/auth/signin"}>Sign in</Link>
        <button className="w-fit bg-blue-3 text-white font-bold py-2.5 px-4 rounded-2xl hover:scale-105 transition-all duration-300 border-4 border-pink-1">
          <Link to={"/onboarding/auth/login"}>Create free account</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
