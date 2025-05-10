import { FC } from 'react';
import { AboutUs } from 'features/aboutUs/AboutUs';
import { ProductList } from 'features/productList/ProductList';
import styles from './MainContent.module.scss';

export const MainContent: FC = () => {
  return (
    <main
      className={styles.mainContent}
      itemScope
      itemType="http://schema.org/MedicalDevice"
    >
      <section id="main" className={styles.mainContentIntro}>
        <span>Аренда и доставка по всему Крыму</span>
        <h1>Медицинские кровати на дом</h1>
        <span className={styles.listTitle}>Только у нас:</span>
        <ul className={styles.listAnimated}>
          <li>Всегда чистые и исправные кровати</li>
          <li>Быстрая срочная доставка</li>
          <li>Оплата после получения кровати</li>
        </ul>
      </section>
      <div className={styles.mainDescr} itemProp="description">
        {' '}
        Более 20 лет мы предоставляем в аренду медицинские функциональные
        кровати, а также средства реабилитации. Профессиональные решения для
        комфортного и эффективного восстановления дома.
      </div>
      <AboutUs />

      <ProductList />
    </main>
  );
};
