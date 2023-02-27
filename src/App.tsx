import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

export default function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
