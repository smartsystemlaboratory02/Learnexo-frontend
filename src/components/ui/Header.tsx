import { Bell } from "lucide-react";
import Search from "./form/Search";

// {image, lastname, firstname, role}
// {firstname ? firstname : "UserFirstname"}

const Header = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex flex-col gap-2">
        <p>Welcome back, UserFirstname</p>
        <p>Your learning management dashboard.</p>
      </div>
      <Search placeholder="Search" name="main-search" />
      <div>
        <div className="border-2 border-gray-4 rounded-lg p-1.5 w-11 h-11 flex items-center justify-center">
          <Bell color="#BBBBBB" />
        </div>
        <div className="border-2 border-gray-4 rounded-lg p-1.5 h-11 flex items-center justify-center">
          {<img src="" alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
