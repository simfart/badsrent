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
        Мы предоставляем в аренду медицинские кровати для лежачих больных с
        доставкой по всему Крыму: Симферополь, Ялта, Севастополь, Евпатория и
        другие города. У нас вы можете{' '}
        <strong>взять в аренду медицинскую кровать</strong> с электроприводом,
        функцией переворота и трансформацией в кардио-кресло.
        <br />
        <br />
        Наша компания предлагает{' '}
        <strong>функциональные кровати для лежачих больных в аренду</strong>,
        включая модели с туалетным устройством и штангой для подтягивания. Мы
        знаем, насколько важен комфорт и безопасность при уходе за близкими,
        поэтому тщательно подбираем каждую модель оборудования.
        <br />
        <br />
        Услуга <strong>аренды медицинской кровати</strong> подходит как для
        краткосрочного, так и для длительного ухода на дому. Независимо от того,
        нужна ли вам <strong>медицинская кровать с электроприводом</strong> или
        простая механическая модель, мы подберём оптимальное решение и доставим
        кровать в кратчайшие сроки.
      </div>
      <AboutUs />

      <ProductList />
    </main>
  );
};
