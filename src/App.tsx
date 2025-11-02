import { Toaster } from "sonner";
import {
  createTheme,
  MantineProvider,
  type MantineThemeOverride,
} from "@mantine/core";

const theme: MantineThemeOverride = createTheme({
  fontFamily: "Lato, sans-serif",
  primaryColor: "#0046FF",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Toaster richColors />
    </MantineProvider>
  );
}

export default App;
