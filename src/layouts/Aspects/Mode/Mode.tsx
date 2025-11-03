import { memo } from "react";
import { Icon } from "@/components/Icon";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import cx from "clsx";
import styles from "./Mode.module.scss";

const ModeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isLight = colorScheme === "light";

  return (
    <ActionIcon
      size="xl"
      variant="default"
      className={styles.action}
      aria-label="Toggle color scheme"
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      onClick={() => setColorScheme(isLight ? "dark" : "light")}
    >
      <Icon
        name="Sun"
        className={cx(styles.icon, { [styles.light]: isLight })}
      />
      <Icon
        name="Moon"
        className={cx(styles.icon, { [styles.light]: !isLight })}
      />
    </ActionIcon>
  );
};

export default memo(ModeToggle);
