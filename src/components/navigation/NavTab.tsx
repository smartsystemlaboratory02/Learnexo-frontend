import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { NavLinkType } from "../../utils/types/nav";

type NavTabProps = NavLinkType & {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const NavTab: React.FC<NavTabProps> = ({ label, active, setActive, Icon }) => {
  const to = `/${label}`;
  const [isOpen, setIsOpen] = useState(active === to);

  useEffect(() => {
    setIsOpen(active === to);
  }, [active]);

  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex justify-between items-center px-3 py-2 rounded-md ${
            isActive ? "bg-blue-3 text-white" : "bg-white text-blue-6"
          }`
        }
        onClick={() => setActive(to)}
      >
        {({ isActive }) => (
          <div className="flex justify-between items-center w-full">
            <div className="w-fit h-full flex justify-between items-center gap-3">
              <Icon size={18} />
              <p
                className={`font-inter font-medium capitalize leading-[24px] ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                {label}
              </p>
            </div>
            <ChevronDown />
          </div>
        )}
      </NavLink>

      {/* {isOpen && <div className="w-24 h-24 border"></div>} */}
    </div>
  );
};

export default NavTab;
