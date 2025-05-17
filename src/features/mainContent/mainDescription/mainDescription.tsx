import { FC, memo } from 'react';
import styles from './mainDescription.module.scss';

export const MainDescription: FC = memo(() => {
  return (
    <div
      className={styles.mainDescr}
      itemProp="description"
      data-lcp-element="true"
      data-importance="high"
    >
      <p>
        {' '}
        Более 20 лет мы предоставляем в аренду медицинские функциональные
        кровати и средства реабилитации с доставкой по всему Крыму: Симферополь,
        Ялта, Севастополь, Евпатория и другие города. Профессиональные решения
        для комфортного и эффективного восстановления дома.
      </p>
    </div>
  );
});

MainDescription.displayName = 'MainDescription';
