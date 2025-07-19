import { useState } from "react";
import NavTab from "./NavTab";
import { sidebarNavs } from "../../utils/lib/nav";

const NavTabs = () => {
  const [active, setActive] = useState<string>("/dashboard");

  return (
    <div>
      {sidebarNavs.map((nav) => (
        <NavTab
          active={active}
          setActive={setActive}
          label={nav.label}
          Icon={nav.Icon}
        ></NavTab>
      ))}
    </div>
  );
};

export default NavTabs;
