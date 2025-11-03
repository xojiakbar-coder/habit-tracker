import * as Types from './internal/types';
import { Title as MantineTitle } from '@mantine/core';

// hooks
import useTitleStyle from './internal/hooks/useTitleStyle';

// styles
import cx from 'clsx';
import styles from './Title.module.scss';

const Title = ({ children, variant, className = '' }: Types.IBase.IProps) => {
  const variantClass = useTitleStyle(variant);

  return <MantineTitle className={cx(styles.outer, variantClass, className)}>{children}</MantineTitle>;
};

export default Title;
