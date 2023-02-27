import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import { Home } from "./pages/home";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
