import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
      <Analytics />
    </Provider>
  </StrictMode>
);
