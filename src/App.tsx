import "./App.css";
import { Toaster } from "sonner";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right"/>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
