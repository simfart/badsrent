import { FC } from 'react';
import { logoImg, phoneLightIcon } from 'shared/assets/images';
import styles from './Header.module.scss';

const Header: FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logoImg} alt="Логотип" />
          <div className={styles['logo-title']}>МедЮг АРЕНДА</div>
        </div>

        <nav className={styles.menu}>
          <ul>
            <li>
              <button onClick={() => scrollToSection('main')}>Главная</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about-us')}>О нас</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('products')}>
                Каталог аренды
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <a href="tel:+79780917410">
        <button className={styles.contact}>
          <img src={phoneLightIcon} alt="Позвонить" /> 8 978 091 74 10
        </button>
      </a>
    </header>
  );
};

export default Header;
