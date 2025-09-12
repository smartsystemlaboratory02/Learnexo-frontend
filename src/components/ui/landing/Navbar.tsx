import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import type { ComponentProps } from "react";

// const Navbar1 = () => {
//   return (
//     <nav className="flex gap-2 items-center">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `font-semibold whitespace-nowrap  ${
//             isActive ? "text-purple-1" : "text-black-1"
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about_us"
//         className={({ isActive }) =>
//           `font-semibold whitespace-nowrap ${
//             isActive ? "text-purple-1" : "text-black-1"
//           }`
//         }
//       >
//         About us
//       </NavLink>
//       <NavLink
//         to="/courses"
//         className={({ isActive }) =>
//           `font-semibold whitespace-nowrap ${
//             isActive ? "text-purple-1" : "text-black-1"
//           }`
//         }
//       >
//         Courses
//       </NavLink>
//       <NavLink
//         to="/contact_us"
//         className={({ isActive }) =>
//           `font-semibold whitespace-nowrap ${
//             isActive ? "text-purple-1" : "text-black-1"
//           }`
//         }
//       >
//         Contact us
//       </NavLink>
//     </nav>
//   );
// };

const Navbar = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <NavLink to="#">Home</NavLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#">Contact Us</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default Navbar;
