import { ThemeProvider } from "styled-components";
import Community from "./components/buttons/Community";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Community>Top Opportunities</Community>
      <Community>Data Health</Community>
    </ThemeProvider>
  );
}
