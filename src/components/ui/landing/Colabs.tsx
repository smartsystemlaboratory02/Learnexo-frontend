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
        <div className="mt-14 flex flex-wrap items-center justify-center gap-14">
          <div className="flex flex-col">
            <p className="text-blue-3 font-bold text-3xl">250+</p>
            <p className="text-2xl font-light leading[36px]">Collaboration</p>
          </div>

          <img src={duolingo} alt="duolingo" />
          <img src={codecov} alt="codecov" />
          <img src={usertesting} alt="usertesting" />
          <img src={magicleap} alt="magicleap" />
        </div>
      </div>
    </div>
  );
};

// export default Logos01Page;

// export default Logos06Page;

export default Colabs;
