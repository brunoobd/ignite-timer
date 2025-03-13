import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";

import { CyclesContextProvider, TasksContextProvider } from "@contexts";
import { defaultTheme } from "@themes";
import { GlobalStyle } from "@styles";
import { Router } from "@routes";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TasksContextProvider>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </TasksContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};
