import Hero from "./Hero";
import HeroHeader from "../../components/ui/landing/LandingHeader";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import TheTeam from "./TheTeam";
import Recommendation from "./Recommendation";
import StartToday from "./StartToday";
import LandingFooter from "../../components/ui/landing/LandingFooter";

const Landing = () => {
  return (
    <div className="bg-white">
      <HeroHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <TheTeam />
      <Recommendation />
      <StartToday />
      <LandingFooter />
    </div>
  );
};

export default Landing;
