// styles
import cx from 'clsx';
import styles from './Status.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  i?: number;
  title?: string;
  services?: string;
  className?: string;
  description?: string;
}

const Status = ({ i, title, services, className, description, ...args }: IProps) => {
  return (
    <main {...args} className={cx(styles.card, className)}>
      <div className={styles.index}>{i}</div>
      <section>
        <p className={styles.title}>{title}</p>
        <div>
          <div className={styles.wrapper}>
            <p className={styles.services}>{services}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </section>
    </main>
  );
};

export default Status;
