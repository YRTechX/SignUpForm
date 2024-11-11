import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/index.css";
import "@/assets/reset.css";
import "@/assets/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "@/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App />);
