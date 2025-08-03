import { AlignJustify } from "lucide-react";
import Logo from "../ui/Logo";
import NavTabs from "./NavTabs";

const Sidebar = () => {
  return (
    <div className="w-full py-12 px-6 flex flex-col items-center justify-between gap-17 scrollbar-hide">
      <div className="border-2 border-gray-4 rounded-lg p-1.5 w-11 h-11 flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out mlg:hidden">
        <AlignJustify color="#BBBBBB" />
      </div>
      <Logo />
      <NavTabs />
    </div>
  );
};

export default Sidebar;
