import Logo from "../../components/ui/Logo";
import jacobjones from "../../assets/images/jacobjames.png";

const Recommendation = () => {
  return (
    <section className="p-12 md:p-24 bg-green-1/2">
      <div className="flex items-center flex-col text-center">
        <Logo />
        <h3 className="my-8 text-black text-3xl md:text-5xl md:leading-[60px] tracking-[-2%] font-medium">
          Both my kids are on Learnexo — one uses VR, the other loves gamified
          quizzes
        </h3>
        <img src={jacobjones} alt="Jacob Jones" className="mb-4" />
        <p className="font-medium text-lg leading-[28px]">Jacob Jones</p>
        <p className="text-gray-2">Student, National University</p>
      </div>
    </section>
  );
};

export default Recommendation;
