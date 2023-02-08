import { ThemeProvider } from "styled-components";
import { Button } from "./components/buttons/Subscribe/style";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
}
