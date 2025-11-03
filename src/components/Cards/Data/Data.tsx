import { useTranslation } from 'react-i18next';

import { Icon } from '@/interface/components/Icon';

// styles
import cx from 'clsx';
import styles from './Data.module.scss';

interface IProps {
  text?: string;
  title?: string;
  resText?: string;
  subtitle?: string;
  type?: 'data' | 'res';
  res?: string | number;
  onClick?: () => void;
}

const Data = ({ title, text, subtitle, type = 'data', res, resText, onClick }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className={cx(styles.card, { [styles.clickable]: !!onClick })} onClick={onClick}>
      <div className={cx(styles.header, type === 'res' ? styles.headerRes : styles.headerData)}>
        {type === 'res' ? res : title}
      </div>

      {subtitle && (
        <div className={styles.subtitle}>
          <p>{subtitle}</p>
        </div>
      )}

      <p
        className={cx(styles.text, {
          [styles.resText]: !!resText
        })}
      >
        {resText ? resText : text}
      </p>

      {onClick && (
        <div className={styles.footer}>
          <span className={styles.footerText}>{t('more')}</span>
          <Icon name={'ChevronRight'} size={20} className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default Data;
