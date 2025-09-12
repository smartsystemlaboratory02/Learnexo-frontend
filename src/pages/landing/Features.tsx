import img1 from "../../assets/images/features1.png";
import img2 from "../../assets/images/features2.png";
import img3 from "../../assets/images/features3.png";
import img4 from "../../assets/images/features4.png";
import Feature from "../../components/ui/landing/Feature";
import { features } from "./data";

const Features = () => {
  return (
    <section className="lgd:px-28 px-12 my-20">
      <div className="flex flex-col items-center text-center gap-6">
        <h3 className="text-blue-4 font-semibold text-[36px]">
          Explore Features
        </h3>
        <p className="text-purple-2 text-xl leading-[30px] max-w-[850px]">
          Designed to Make Every Learner Thrive
        </p>
      </div>

      <div className="flex gap-12 lgd:gap-24 lgd:mt-24 mt-12 items-center flex-col lgd:flex-row">
        <div className="flex gap-4 items-center w-fit shrink-0">
          <div className="flex flex-col gap-4">
            <img src={img1} alt="image 1" />
            <img src={img2} alt="image 2" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={img3} alt="image 3" />
            <img src={img4} alt="image 4" />
          </div>
        </div>

        <div className="grid justify-center md:grid-cols-2 align-middle gap-6">
          {features.map((feature) => {
            const { title, info, img } = feature;
            return (
              <Feature title={title} info={info}>
                <img src={img} alt={title} />
              </Feature>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
