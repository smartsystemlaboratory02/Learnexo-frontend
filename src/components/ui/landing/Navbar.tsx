import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-2 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold whitespace-nowrap  ${
            isActive ? "text-purple-1" : "text-black-1"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about_us"
        className={({ isActive }) =>
          `font-semibold whitespace-nowrap ${
            isActive ? "text-purple-1" : "text-black-1"
          }`
        }
      >
        About us
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `font-semibold whitespace-nowrap ${
            isActive ? "text-purple-1" : "text-black-1"
          }`
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/contact_us"
        className={({ isActive }) =>
          `font-semibold whitespace-nowrap ${
            isActive ? "text-purple-1" : "text-black-1"
          }`
        }
      >
        Contact us
      </NavLink>
    </nav>
  );
};

export default Navbar;
