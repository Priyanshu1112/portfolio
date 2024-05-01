import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HoverProvider } from "./utils/HoverState.jsx";
import { BrowserRouter } from "react-router-dom";
import { RefProvider } from "./utils/RefProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HoverProvider>
      <RefProvider>
        <App />
      </RefProvider>
    </HoverProvider>
  </BrowserRouter>
);
