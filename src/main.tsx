import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MainRouter } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
