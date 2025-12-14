import { FC } from 'react';
import { AboutUs } from 'features/aboutUs/AboutUs';
import ProductList from 'features/productList/ProductList';
import Faq from 'features/faq/Faq';
import { Review } from 'features/review/Review';
import { FeedbackPopup } from 'widgets/feedbackPopup/FeedbackPopup';
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

        <div className={styles.mainDescr}>
          <p>
            Более 20 лет мы предоставляем в аренду медицинские функциональные
            кровати и средства реабилитации с доставкой по всему Крыму:
            Симферополь, Ялта, Севастополь, Евпатория и другие города.
            Профессиональные решения для комфортного и эффективного
            восстановления дома.
          </p>
        </div>

        {/* 🔽 НОВЫЙ ДОБАВЛЕННЫЙ БЛОК */}
        <div className={styles.helpBlock}>
          <h2 className={styles.helpTitle}>
            Помощь для лежачих пациентов — уже сегодня
          </h2>

          <p className={styles.helpSubtitle}>
            Доставим медицинскую кровать за 2 часа, установим и подробно
            покажем, как пользоваться. Оплата — только после установки.
          </p>

          <ul className={styles.helpBenefits}>
            <li>Не нужно поднимать человека вручную</li>
            <li>Справится один родственник</li>
            <li>Снижается нагрузка на спину</li>
            <li>Пациенту легче дышать и принимать пищу</li>
          </ul>

          <ul className={styles.helpChecks}>
            <li>Доставка за 2 часа</li>
            <li>Установка бесплатно</li>
            <li>Оплата после получения</li>
            <li>Работаем по всему Крыму</li>
          </ul>
        </div>
      </section>

      <AboutUs />
      <ProductList />
      <Faq />
      <FeedbackPopup />
      <Review />
    </main>
  );
};
