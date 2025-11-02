import {
  createTheme,
  MantineProvider,
  type MantineThemeOverride,
} from "@mantine/core";
import { useMemo } from "react";
import { Toaster } from "sonner";
import { I18nextProvider } from "react-i18next";
import { instance as i18n } from "@/core/services/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getRoutesData from "./router";

const theme: MantineThemeOverride = createTheme({
  fontFamily: "Lato, sans-serif",
  primaryShade: 7,
  primaryColor: "blue",
  headings: {
    fontWeight: "700",
  },
});

function App() {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <I18nextProvider i18n={i18n}>
        <Toaster richColors />
        <RouterProvider router={router} />
      </I18nextProvider>
    </MantineProvider>
  );
}

export default App;
