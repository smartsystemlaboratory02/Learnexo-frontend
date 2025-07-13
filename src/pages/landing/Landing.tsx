import Hero from "./Hero";
import HeroHeader from "../../components/ui/landing/LandingHeader";
import HowItWorks from "./HowItWorks";

const Landing = () => {
  return (
    <div className="bg-green-1/2">
      <HeroHeader />
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default Landing;
