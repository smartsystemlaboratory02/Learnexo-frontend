import codecov from "../../../assets/images/codecov.png";
import duolingo from "../../../assets/images/duolingo.png";
import usertesting from "../../../assets/images/usertesting.png";
import magicleap from "../../../assets/images/magicleap.png";

const Colabs = () => {
  return (
    <div className="flex px-16 py-10 pr-36 justify-between items-center">
      <div className="flex flex-col">
        <p className="text-blue-3 font-bold text-3xl">250+</p>
        <p className="text-2xl font-light leading[36px]">Collaboration</p>
      </div>

      <img src={duolingo} alt="duolingo" />
      <img src={codecov} alt="codecov" />
      <img src={usertesting} alt="usertesting" />
      <img src={magicleap} alt="magicleap" />
    </div>
  );
};

export default Colabs;
