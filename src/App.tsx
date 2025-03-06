import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";

import { defaultTheme } from "@themes";
import { GlobalStyle } from "@styles";
import { Router } from "@routes";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};
