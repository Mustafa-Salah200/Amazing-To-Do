import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import ContextProvider from "./contextAPI/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
