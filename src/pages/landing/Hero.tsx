import HeroLeftComp from "../../components/ui/landing/HeroLeftComp";
import HeroRightComp from "../../components/ui/landing/HeroRightComp";

const Hero = () => {
  return (
    <div className="bg-green-1/2 flex p-16 gap-54 items-center justify-between">
      <HeroRightComp />
      <HeroLeftComp />
    </div>
  );
};

export default Hero;
