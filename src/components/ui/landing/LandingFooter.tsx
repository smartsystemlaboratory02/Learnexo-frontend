import Logo from "../Logo";

const LandingFooter = () => {
  return (
    <div className="flex justify-around p-6 md:p-8 items-center flex-col gap-4 md:flex-row border-t">
      <div className="w-full flex flex-col gap-4 items-center md:items-start md:w-fit">
        <Logo />
        <p>We use AI to personalize your learning experience.</p>
      </div>
      <p className="text-[#98A2B3]">© 2025 LearNEXO. All rights reserved.</p>
    </div>
  );
};

export default LandingFooter;
