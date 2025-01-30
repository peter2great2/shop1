import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  
      <ThemeProvider >
         <div className=" bg-[#e8e9eb]">
            <App />
         </div>
      </ThemeProvider>
  
);
