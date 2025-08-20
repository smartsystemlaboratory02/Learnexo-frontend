import "./App.css";
import { Toaster } from "sonner";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

function App() {
  useEffect(() => {
    async function fetchLocationData() {
      if (!("geolocation" in navigator)) {
        console.error("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                "User-Agent": "learnexo-app",
                "Accept-Language": "en",
              },
            }
          );

          const data = await res.json();
          console.log(data);

          const address = data.address || {};
          const locationInfo = {
            latitude,
            longitude,
            country: address.country,
            state: address.state,
            city: address.city || address.town || address.village,
            suburb: address.suburb,
            neighbourhood: address.neighbourhood,
            postcode: address.postcode,
            road: address.road,
            displayName: data.display_name,
          };

          console.log("📍 Location Info:", locationInfo);
        } catch (error) {
          console.error("Error fetching location info:", error);
        }
      });
    }

    fetchLocationData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
