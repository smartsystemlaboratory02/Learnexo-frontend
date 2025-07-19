import Logo from "../ui/Logo";
import NavTabs from "./NavTabs";

const Sidebar = () => {
  return (
    <div className="w-[320px] py-12 px-6 border flex flex-col items-center justify-between gap-17">
      <Logo />
      {/* <div> */}

      <NavTabs />
      {/* </div>  */}
    </div>
  );
};

export default Sidebar;
