import HeroHeader from "@/components/ui/landing/LandingHeader";
import heroImage from "@/assets/images/hero-image.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Colabs from "@/components/ui/landing/Colabs";

const Hero = () => {
  return (
    <div className="mb-6">
      <HeroHeader />
      <div className="flex items-center justify-center">
        <div className="w-full mx-auto grid lg:grid-cols-2 gap-12 px-12 py-12">
          <div>
            <h1 className="text-5xl leading-12 md:text-6xl font-bold text-blue-4 md:leading-18 tracking-[-0.5px] mb-5 mt-6 max-w-[17ch]">
              AI-Powered <span className="text-blue-3">Learning</span> for Every{" "}
              <span className="text-purple-1">Student</span>
            </h1>

            <p className="leading-[180%] text-[#646464] mb-9 mt-6 max-w-[60ch]">
              Unleash your potential with Learnexo — a personalized, inclusive
              learning platform powered by AI, designed to adapt to your pace,
              style, and needs.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link to="/onboarding/auth/signup">
                <Button className="text-base hover:scale-105 transition-all duration-300 font-bold">
                  Start Learning
                </Button>
              </Link>

              <Link to="/onboarding/auth/signup">
                <Button
                  variant="ghost"
                  className="bg-green-4 border border-[#EAFFF9] text-green-2 shadow-xs font-bold text-base"
                >
                  See how it works
                </Button>
              </Link>
            </div>
          </div>
          <img src={heroImage} className="w-full" />
        </div>
      </div>
      <Colabs />
    </div>
  );
};

export default Hero;
