import Logo from "../Logo"

const LandingFooter = () => {
  return (
    <div className="flex justify-around px-12 items-center py-12">
      <div className="w-min flex flex-col gap-4">
        <Logo />
        <p>We use AI to personalize your learning experience.</p>
      </div>
      <p className="text-[#98A2B3]">© 2025 LearNEXO. All rights reserved.</p>
    </div>
  );
}

export default LandingFooter
