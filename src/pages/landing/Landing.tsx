import Hero from "./Hero";
import HeroHeader from "../../components/ui/landing/LandingHeader";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import TheTeam from "./TheTeam";
import Recommendation from "./Recommendation";

const Landing = () => {
  return (
    <div className="bg-green-1/2">
      <HeroHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <TheTeam />
      <Recommendation />
    </div>
  );
};

export default Landing;
