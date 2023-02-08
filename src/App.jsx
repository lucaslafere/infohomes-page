import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Subscribe from "./components/buttons/Subscribe";
import How from "./components/buttons/How";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Subscribe />
      <How />
    </ThemeProvider>
  );
}
