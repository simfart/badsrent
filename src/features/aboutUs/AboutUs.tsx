import { FC, memo, useRef, useState, useEffect } from 'react';
import { manImg, RectangImg, vectorImg } from 'shared/assets/images';
import styles from './AboutUs.module.scss';

export const AboutUs: FC = memo(() => {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMore(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

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
            // width="444"
            // height="auto"
            loading="lazy"
          />
          <img
            className={styles.imgVector}
            src={vectorImg}
            alt=""
            width="444"
            height="auto"
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
            Мы — команда, для которой забота о здоровье и комфорте на первом
            месте.
          </p>

          <div ref={ref}>
            {showMore && (
              <>
                <p>
                  Наша компания более 20 лет специализируется на{' '}
                  <strong>аренде медицинских кроватей</strong> и{' '}
                  <strong>оборудования для ухода за лежачими больными</strong>.
                </p>
                <p>
                  Мы предлагаем{' '}
                  <strong>медицинские кровати с электроприводом</strong>,
                  функцией поворота, трансформацией в кресло, а также модели с
                  туалетным устройством и инфузионной стойкой. Все кровати
                  проходят дезинфекцию и техническую проверку перед каждой
                  доставкой.
                </p>
                <p>
                  Если вы ищете, где{' '}
                  <strong>взять в аренду медицинскую кровать</strong> в
                  Симферополе, Ялте, Севастополе или любом другом городе Крыма —
                  мы всегда готовы помочь. Работаем по всему полуострову,
                  обеспечивая быструю доставку и профессиональный сервис.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.whyUs}>
        <h3>Почему выбирают нас:</h3>
        <ul>
          <li>
            <strong>Опыт и профессионализм.</strong> Более 20 лет в сфере
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
            <strong>Работаем по всему Крыму!</strong> Симферополь, Севастополь,
            Ялта, Алушта, Евпатория, Феодосия, Керчь и другие города.
          </li>
        </ul>
      </div>
    </section>
  );
});

AboutUs.displayName = 'AboutUs';
