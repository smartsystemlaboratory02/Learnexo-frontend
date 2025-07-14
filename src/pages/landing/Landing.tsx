import Hero from "./Hero";
import HeroHeader from "../../components/ui/landing/LandingHeader";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import TheTeam from "./TheTeam";

const Landing = () => {
  return (
    <div className="bg-green-1/2">
      <HeroHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <TheTeam />
    </div>
  );
};

export default Landing;
