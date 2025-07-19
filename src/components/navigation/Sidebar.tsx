import Logo from "../ui/Logo";
import NavTabs from "./NavTabs";

const Sidebar = () => {
  return (
    <div className="w-full py-12 px-6 flex flex-col items-center justify-between gap-17">
      <Logo />
      <NavTabs />
    </div>
  );
};

export default Sidebar;
