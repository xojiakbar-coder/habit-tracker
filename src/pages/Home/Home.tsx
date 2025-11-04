import { Register } from "@/pages/Register";
import { Space, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import styles from "./Home.module.scss";
import { Button } from "@/components/Button";

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={styles.container}>
      <Title order={1} className={styles.userName}>
        Welcome {"User 🤷"}
      </Title>

      <Space h="md" />
      <Button content="Register" onClick={open} />

      <Register opened={opened} close={close} />
    </div>
  );
};

export default Home;
