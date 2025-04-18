import { FC } from 'react';

import { ProductList } from 'features/productList/ProductList';
import { AboutUs } from 'features/aboutUs/AboutUs';

import './MainContent.scss';

export const MainContent: FC = () => {
  return (
    <main className="main-content">
      <section id="main" className="main-content__intro">
        <h1>Добро пожаловать на наш сайт!</h1>
        <p>Мы предоставляем качественные товары для вашего бизнеса.</p>
      </section>

      <section id="products" className="main-content__products">
        <h2>Наши продукты</h2>
        <ProductList />
      </section>

      <section id="about-us" className="main-content__about-us">
        <AboutUs />
      </section>
    </main>
  );
};
