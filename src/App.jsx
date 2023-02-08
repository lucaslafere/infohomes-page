import { ThemeProvider } from "styled-components";
import Subscribe from "./components/buttons/Subscribe";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Subscribe />
    </ThemeProvider>
  );
}
