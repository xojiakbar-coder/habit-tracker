import React from 'react';

// styles
import cx from 'clsx';
import styles from './SectionWrapper.module.scss';

type IProps = {
  lightBg?: boolean;
  className?: string;
  [key: string]: any;
  children: React.ReactNode;
};

const SectionWrapper = ({ lightBg = false, children, className, ...props }: IProps) => (
  <section className={cx(styles.wrapper, lightBg && styles.lightBg, className)} {...props}>
    {children}
  </section>
);

export default SectionWrapper;
