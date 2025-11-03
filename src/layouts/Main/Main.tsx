import { Outlet } from "react-router-dom";
import { Button } from "@/components/Button";
import { Mode } from "@/layouts/Aspects/Mode";
import { Text, AppShell } from "@mantine/core";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <AppShell padding="0" header={{ height: 60 }}>
      <AppShell.Header classNames={{ header: styles.header }}>
        <Text className={styles.title}>Habit Tracker</Text>
        {/* <Button variant="success" content="Content" /> */}
        <Mode />
      </AppShell.Header>

      <AppShell.Main classNames={{ main: styles.main }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Main;
