import React from 'react';
import styles from './Desc.module.scss';

interface DescProps {
  className?: string;
  children: React.ReactNode;
  center?: boolean;
}

const Desc: React.FC<DescProps> = ({ className = '', children, center = false }) => {
  return <p className={`${styles.desc} ${center ? styles.center : ''} ${className}`}>{children}</p>;
};

export default Desc;
