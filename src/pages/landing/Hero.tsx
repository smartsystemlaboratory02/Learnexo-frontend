import Colabs from "../../components/ui/landing/Colabs";
import ConcentricCircles from "../../components/ui/landing/ConcentricCircles";
import HeroLeftComp from "../../components/ui/landing/HeroLeftComp";
import HeroRightComp from "../../components/ui/landing/HeroRightComp";

const Hero = () => {
  return (
    <div className="bg-green-1/2">
      <div className="flex p-16 gap-54 items-center justify-between">
        <HeroRightComp />
        <HeroLeftComp />
      </div>
      <ConcentricCircles position="top-40 left-66" />
      <ConcentricCircles position="top-120 -right-8" />

      <Colabs />
    </div>
  );
};

export default Hero;
