import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Providers } from "./providers";
import { GlobalStyle } from "./style/global";
import { customTheme } from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ThemeProvider theme={customTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
