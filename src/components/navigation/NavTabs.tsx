import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavTab from "./NavTab";
import { sidebarNavs } from "../../utils/lib/nav";

const NavTabs = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-full flex flex-col gap-4 scrollbar-hide">
      {sidebarNavs.map((nav) => (
        <NavTab
          key={nav.label}
          active={active}
          setActive={setActive}
          label={nav.label}
          Icon={nav.Icon}
          subNavs={nav.subNavs}
        />
      ))}
    </nav>
  );
};

export default NavTabs;
