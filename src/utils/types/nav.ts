import type { LucideProps } from "lucide-react";

export type NavLinkType = {
  label: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  subNavs?: string[]
};