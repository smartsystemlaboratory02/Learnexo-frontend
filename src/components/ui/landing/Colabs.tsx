import codecov from "../../../assets/images/codecov.png";
import duolingo from "../../../assets/images/duolingo.png";
import usertesting from "../../../assets/images/usertesting.png";
import magicleap from "../../../assets/images/magicleap.png";

// const Colabs = () => {
//   return (
//     <div className="flex px-16 py-10 pr-36 justify-between items-center">

//     </div>
//   );
// };

const Colabs = () => {
  return (
    <div className="flex items-center justify-center px-6">
      <div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          <div className="flex flex-col">
            <p className="text-blue-3 font-bold nd:text-3xl text-xl">250+</p>
            <p className="md:text-2xl text-lg font-light leading[36px]">Collaboration</p>
          </div>

          <img src={duolingo} alt="duolingo" className="max-w-[100px]"/>
          <img src={codecov} alt="codecov" className="max-w-[100px]"/>
          <img src={usertesting} alt="usertesting" className="max-w-[100px]"/>
          <img src={magicleap} alt="magicleap" className="max-w-[100px]"/>
        </div>
      </div>
    </div>
  );
};

export default Colabs;
