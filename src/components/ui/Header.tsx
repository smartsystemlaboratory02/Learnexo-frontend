import { Bell } from "lucide-react";
import Search from "./form/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// {image, lastname, firstname, role}
// {firstname ? firstname : "UserFirstname"}

const Header = () => {
  return (
    <div className="flex-col w-full flex items-center gap-4 md:gap-6 p-4 mx-auto">
      <div className="lgd:hidden">
        <Search placeholder="Search" name="main-search" />
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-between mlg:justify-center gap-4 w-full sm:w-4/5 lg:flex-row lg:flex-nowrap lg:w-full lg:justify-between">
        <WelcomeText />

        <div className="hidden lgd:block">
          <Search placeholder="Search" name="main-search" />
        </div>

        <div className="flex items-center gap-2">
          <NotificationBell />
          <UserImageAndInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;

const WelcomeText = () => {
  return (
    <div className="flex flex-col md:gap-1 items-start w-fit">
      <p className="font-medium mlg:leading-9.5 mlg:text-[30px] md:leading-6 md:text-xl whitespace-nowrap mlg:mx-auto lg:mx-0">
        Welcome back, UserFirstname
      </p>
      <p className="text-gray-6 mlg:leading-6 md:leading-4 md:text-sm whitespace-nowrap text-xs mlg:text-base mlg:mx-auto lg:mx-0">
        Your learning management dashboard.
      </p>
    </div>
  );
};

const UserImageAndInfo = () => {
  return (
    <div className="border-2 border-gray-4 rounded-lg p-0.5 h-11 flex items-center justify-between gap-3 pr-3 cursor-pointer">
      <Link to="./profile">
        <Avatar className="rounded-md h-full aspect-square">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          {/* From backend */}
          <AvatarFallback className="rounded-md h-full aspect-square">
            CN
          </AvatarFallback>
        </Avatar>
      </Link>

      <div>
        <p className="font-semibold text-xs leading-4">Username</p>
        <p className="text-gray-6 text-[10px] ">UserRole</p>
      </div>
    </div>
  );
};

const NotificationBell = () => {
  return (
    <div className="border-2 border-gray-4 rounded-lg p-1.5 w-11 h-11 flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out">
      <Bell color="#BBBBBB" />
    </div>
  );
};
