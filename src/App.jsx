import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import How from "./components/buttons/How";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <How />
    </ThemeProvider>
  );
}
