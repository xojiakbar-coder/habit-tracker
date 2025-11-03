import { Outlet } from "react-router-dom";
import { Mode } from "@/layouts/Aspects/Mode";
import { Text, AppShell, Group } from "@mantine/core";

import styles from "./Main.module.scss";
import { Button } from "@/components/Button";

const Main = () => {
  return (
    <AppShell padding="0" header={{ height: 60 }}>
      <AppShell.Header classNames={{ header: styles.header }}>
        <Text className={styles.title}>Habit Tracker</Text>
        <Group>
          <Button variant="outline" content="Contact" />
          <Mode />
        </Group>
      </AppShell.Header>

      <AppShell.Main classNames={{ main: styles.main }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Main;
