import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/ui/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="px-4 md:px-6 w-full">
        <Header />
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
