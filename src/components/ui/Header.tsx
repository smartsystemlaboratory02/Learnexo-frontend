import { Bell } from "lucide-react";
import Search from "./form/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// {image, lastname, firstname, role}
// {firstname ? firstname : "UserFirstname"}

const Header = () => {
  return (
    <div className="w-full flex items-center gap-6 p-4">
      <div className="flex flex-col gap-1 items-start w-full">
        <p className="font-medium leading-9.5 text-[30px]">
          Welcome back, UserFirstname
        </p>
        <p className="text-gray-6 leading-6">
          Your learning management dashboard.
        </p>
      </div>

      <Search placeholder="Search" name="main-search" />

      <div className="flex items-center gap-2">
        <div className="border-2 border-gray-4 rounded-lg p-1.5 w-11 h-11 flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out">
          <Bell color="#BBBBBB" />
        </div>
        <div className="border-2 border-gray-4 rounded-lg p-0.5 h-11 flex items-center justify-between gap-3 pr-3">
          <Link to="../profile">
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
      </div>
    </div>
  );
};

export default Header;
