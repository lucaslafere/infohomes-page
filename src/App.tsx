import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Community } from "./components/buttons/Community";

export default function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
