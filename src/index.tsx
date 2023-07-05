import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import GlobalFont from "./styles/GlobalFont";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFont />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
