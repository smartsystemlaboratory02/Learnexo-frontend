import {
  BookCheck,
  ChartPie,
  CopyCheck,
  Layers,
  LayoutDashboardIcon,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react";
import type { NavLinkType } from "../types/nav";

export const sidebarNavs: NavLinkType[] = [
  {
    label: "dashboard",
    Icon: LayoutDashboardIcon,
    subNavs: ["overview", "notifications", "analytics", "reports"]
  },
  {
    label: "courses",
    Icon: Layers,
  },
  {
    label: "assessment",
    Icon: CopyCheck,
  },
  {
    label: "quizzes",
    Icon: BookCheck,
  },
  {
    label: "reports",
    Icon: ChartPie,
  },
  {
    label: "instructors",
    Icon: Users,
  },
  {
    label: "support",
    Icon: LifeBuoy,
  },
  {
    label: "settings",
    Icon: Settings,
  },
];
