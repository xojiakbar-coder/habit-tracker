import { memo } from 'react';
import { Badge } from '@mantine/core';

// styles
import styles from './Case.module.scss';

interface IBadge {
  id: number;
  title: string;
}

interface IProps {
  photo?: string;
  title?: string;
  hashtags?: IBadge[];
}

const Case = memo(({ photo = '', title = '', hashtags = [] }: IProps) => {
  return (
    <div className={styles.card}>
      <div>
        {title && <div className={styles.title}>{title}</div>}

        <div className={styles.imageWrapper}>
          <img
            src={photo}
            alt={title || 'case image'}
            loading="lazy"
            width="698"
            height="400"
            decoding="async"
            className={styles.image}
          />
        </div>

        {hashtags?.length > 0 && (
          <div className={styles.badges}>
            {hashtags.map(({ id, title }) => (
              <Badge
                key={id}
                radius="sm"
                color="gray"
                variant="outline"
                classNames={{ root: styles.badge, label: styles.badgeLabel }}
              >
                {title}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Case;
