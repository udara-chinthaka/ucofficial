import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./theme";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
