import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import { Community } from "./components/buttons/Community";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
