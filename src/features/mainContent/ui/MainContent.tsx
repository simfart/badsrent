import { FC } from 'react';

import styles from './MainContent.module.scss';
import { AboutUs } from 'features/aboutUs';
import { ProductList } from 'features/productList';

export const MainContent: FC = () => {
  return (
    <main className={styles.mainContent}>
      <section id="main" className={styles.mainContentIntro}>
        <span>Аренда и доставка по всему Крыму</span>
        <h1>Медицинские кровати на дом</h1>
        <p>
          Профессиональные решения для комфортного и эффективного восстановления
          дома. Мы предоставляем оборудование и поддержку для людей, нуждающихся
          в реабилитации после операции, травм или заболеваний.
        </p>
      </section>

      <AboutUs />

      <ProductList />
    </main>
  );
};
