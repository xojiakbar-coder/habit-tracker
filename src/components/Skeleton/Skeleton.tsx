import React from 'react';
import cx from 'clsx';
import styles from './Skeleton.module.scss';

type SkeletonProps = {
  width?: string | number; // eni (masalan: '100%' yoki 200)
  height?: string | number; // bo'yi (masalan: '20px')
  radius?: string | number; // radius (masalan: '4px' yoki '50%')
  className?: string; // qo'shimcha class
};

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '100%', radius = '0', className }) => {
  return (
    <div
      className={cx(styles.skeleton, className)}
      style={{
        width,
        height,
        borderRadius: radius
      }}
    />
  );
};

export default Skeleton;
