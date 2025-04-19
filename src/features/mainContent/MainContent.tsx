import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from 'features/productList/ProductList';
import { AboutUs } from 'features/aboutUs/AboutUs';
import { ProductDetails } from 'features/productList/productDetails/ProductDetails';

import styles from './MainContent.module.scss';

export const MainContent: FC = () => {
  return (
    <main className={styles.mainContent}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="main" className={styles.mainContent__intro}>
                <h3>Комфорт и Забота рядом с вами!</h3>
                <h1>Медицинские кровати на дом</h1>
                <p>
                  Профессиональные решения для комфортного и эффективного
                  восстановления дома. Мы предоставляем оборудование и поддержку
                  для людей, нуждающихся в реабилитации после операции, травм
                  или заболеваний.
                </p>
              </section>

              <section id="about-us" className="main-content__about-us">
                <AboutUs />
              </section>

              <section id="products" className="main-content__products">
                <h2>Наши продукты</h2>
                <ProductList />
              </section>
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </main>
  );
};
