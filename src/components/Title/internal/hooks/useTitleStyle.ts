import * as Types from '../types';

// styles
import styles from '../../Title.module.scss';

function useTitleStyle(variant: Types.IUse.Variant) {
  switch (variant) {
    case 'primary':
      return styles.primary;
    case 'secondary':
      return styles.secondary;
    case 'title':
      return styles.title;
    case 'section-name':
      return styles.sectionName;
    default:
      return styles.default;
  }
}

export default useTitleStyle;
