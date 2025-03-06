import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@themes";
import { GlobalStyle } from "@styles";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};
