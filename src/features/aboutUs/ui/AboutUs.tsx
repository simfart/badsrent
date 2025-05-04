import { FC } from 'react';
import styles from './AboutUs.module.scss';
import { manImg, RectangImg, vectorImg } from 'shared/assets/images';

export const AboutUs: FC = () => {
  return (
    <section id="about-us" className={styles.aboutUs} itemScope itemType="http://schema.org/Organization">
      <div className={styles.aboutUsMain}>
        <div className={styles.imgSection}>
          <img className={styles.imgPict} src={RectangImg} alt="Вектор" />
          <img className={styles.imgVector} src={vectorImg} alt="Вектор" />
          <img
            className={styles.imgPhoto}
            src={manImg}
            alt="Медицинская кровать"
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
            <strong>Опыт и профессионализм.</strong> Мы работаем в сфере
            медицинской техники и реабилитации уже более 20 лет, и точно знаем,
            что нужно нашим клиентам.
          </li>
          <li>
            <strong>Качество и надежность.</strong> Все кровати и оборудование
            проходят регулярную проверку и дезинфекцию. Мы работаем только с
            проверенными поставщиками.
          </li>
          <li>
            <strong>Оперативная доставка и установка.</strong> Мы понимаем, что
            в вопросах ухода важна каждая минута, поэтому доставляем
            оборудование максимально быстро и аккуратно.
          </li>
          <li>
            <strong>Работаем по всему Крыму!</strong> Доставим и установим
            оборудование в любой населённый пункт региона — быстро, аккуратно и
            без лишних хлопот. Где бы вы ни находились, помощь будет рядом.
          </li>
        </ul>
        <p></p>
      </div>
    </section>
  );
};
