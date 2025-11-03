import { useEffect } from 'react';
import { Loader } from '@mantine/core';

import styles from './Splash.module.scss';

const Splash = () => {
  useEffect(() => {
    document.body.style.height = '100dvh';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.splashWrapper}>
      <Loader color="var(--color-primary)" type="oval" size="lg" />
    </div>
  );
};

export default Splash;
