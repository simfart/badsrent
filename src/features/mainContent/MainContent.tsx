import { FC, lazy, Suspense } from 'react';
import { AboutUs } from 'features/aboutUs/AboutUs';
import styles from './MainContent.module.scss';

const ProductList = lazy(() => import('features/productList/ProductList'));
const Faq = lazy(() => import('features/faq/Faq'));

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
        <div
          className={styles.mainDescr}
          itemProp="description"
          data-lcp-element="true"
          data-importance="high"
        >
          <p>
            Более 20 лет мы предоставляем в аренду медицинские функциональные
            кровати и средства реабилитации с доставкой по всему Крыму:
            Симферополь, Ялта, Севастополь, Евпатория и другие города.
            Профессиональные решения для комфортного и эффективного
            восстановления дома.
          </p>
        </div>
      </section>

      <AboutUs />
      <Suspense fallback={null}>
        <ProductList />
        <Faq />
      </Suspense>
    </main>
  );
};
