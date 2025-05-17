import { FC, memo } from 'react';
import { manImg, RectangImg, vectorImg } from 'shared/assets/images';
import styles from './AboutUs.module.scss';

export const AboutUs: FC = memo(() => {
  return (
    <section
      id="about-us"
      className={styles.aboutUs}
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className={styles.aboutUsMain}>
        <div className={styles.imgSection}>
          <img
            className={styles.imgPict}
            src={RectangImg}
            alt=""
            loading="lazy"
          />
          <img
            className={styles.imgVector}
            src={vectorImg}
            alt=""
            loading="lazy"
          />
          <img
            className={styles.imgPhoto}
            src={manImg}
            alt="Медицинская кровать"
            width="600"
            height="auto"
            loading="lazy"
          />
        </div>

        <div className={styles.aboutUsContent}>
          <h2 itemProp="name">О нас</h2>

          <p itemProp="description">
            Мы — команда, для которой забота о вашем здоровье и комфорте на
            первом месте. Наша компания специализируется на аренде медицинских
            кроватей и оборудования для домашнего ухода, помогая создать
            безопасные и удобные условия для восстановления и повседневной жизни
            людей с ограниченными возможностями или временными трудностями.
          </p>
        </div>
      </div>

      <div className={styles.whyUs}>
        <h3>Почему выбирают нас:</h3>
        <ul>
          <li>
            <strong>Опыт и профессионализм.</strong> Многолетний опыт в сфере
            медицинской техники и реабилитации. Мы точно знаем, что нужно нашим
            клиентам.
          </li>
          <li>
            <strong>Качество и надёжность.</strong> Все кровати проходят
            проверку и дезинфекцию. Работаем только с проверенными поставщиками.
          </li>
          <li>
            <strong>Оперативная доставка и установка.</strong> Мы понимаем, что
            в вопросах ухода важна каждая минута. Доставляем оборудование
            максимально быстро и аккуратно.
          </li>
          <li>
            <strong>Работаем по всему Крыму!</strong> Предоставляем медицинские
            кровати в аренду с доставкой в Симферополе, Севастополе, Ялте,
            Алуште, Евпатории, Феодосии, Керчи и других населённых пунктах
            Крыма.
          </li>
        </ul>
      </div>
    </section>
  );
});

AboutUs.displayName = 'AboutUs';
