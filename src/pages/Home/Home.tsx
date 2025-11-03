import { storage } from "@/core/services";
import { Title } from "@mantine/core";
import { useEffect } from "react";
import { toast } from "sonner";

import styles from "./Home.module.scss";

const Home = () => {
  const userName = storage.local.get("username");

  useEffect(() => {
    if (!userName) {
      toast.error("Your username is undefined", {
        position: "top-center",
      });
    }
  }, [userName]);

  return (
    <div className={styles.container}>
      <Title order={1} className={styles.userName}>
        Welcome {userName || "🤷"}
      </Title>
    </div>
  );
};

export default Home;
