import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <AppShell padding="0" header={{ height: 60 }}>
      <AppShell.Header>Header</AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Main;
