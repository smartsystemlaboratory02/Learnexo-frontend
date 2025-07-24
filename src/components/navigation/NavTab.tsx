import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { NavLinkType } from "../../utils/types/nav";
import { motion, AnimatePresence } from "framer-motion";

type NavTabProps = NavLinkType & {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const NavTab: React.FC<NavTabProps> = ({
  label,
  active,
  setActive,
  Icon,
  subNavs,
}) => {
  const to = `/${label}`;
  const [isOpen, setIsOpen] = useState(active.startsWith(to));

  useEffect(() => {
    setIsOpen(active.startsWith(to));
  }, [active, label]);

  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex justify-between items-center px-3 py-2 rounded-md  ${
            isActive
              ? "bg-blue-3 text-white hover:opacity-85"
              : "bg-transparent text-blue-6 hover:bg-blue-3/40"
          }`
        }
        onClick={() => {
          setActive(to);
          setIsOpen(!isOpen);
        }}
      >
        {({ isActive }) => (
          <div className="flex justify-between items-center w-full ">
            <div className="w-fit h-full flex justify-between items-center gap-3 ">
              <Icon size={18} />
              <p
                className={`font-inter font-medium capitalize leading-[24px] ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                {label}
              </p>
            </div>
            {subNavs && (
              <ChevronDown
                className={`transition-all ease-in-out duration-500 ${
                  isOpen && "rotate-180 "
                }`}
              />
            )}
          </div>
        )}
      </NavLink>

      <AnimatePresence>
        {isOpen && subNavs && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
            className="flex w-full flex-col gap-2 pt-3"
          >
            {subNavs.map((nav) => (
              <NavLink
                to={`${to}/${nav}`}
                className="capitalize bg-purple-1/75 pl-6 py-1 rounded-lg text-white hover:opacity-75"
                key={nav}
              >
                {nav}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavTab;
