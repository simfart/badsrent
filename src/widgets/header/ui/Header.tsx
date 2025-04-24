import { FC, useEffect, useRef, useState } from 'react';
import { logoImg, phoneLightIcon } from 'shared/assets/images';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${styles.burger}`)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Контейнер с логотипом и меню */}
        <div className={styles.headerContainer}>
          {/* Бургер кнопка */}
          <div
            className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.logo}>
            <img src={logoImg} alt="Логотип" />
            <div className={styles['logo-title']}>МедЮг АРЕНДА</div>
          </div>

          {/* Основное меню для десктопов */}
          <nav className={styles.desktopMenu}>
            <ul>
              <li>
                <button onClick={() => handleClick('main')}>Главная</button>
              </li>
              <li>
                <button onClick={() => handleClick('about-us')}>О нас</button>
              </li>
              <li>
                <button onClick={() => handleClick('products')}>
                  Выбор кровати
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Контактная информация */}
        <a href="tel:+79780917410">
          <button className={styles.contact}>
            <img src={phoneLightIcon} alt="Позвонить" /> 8 978 091 74 10
          </button>
        </a>
      </div>

      {/* Затемнение фона */}
      {menuOpen && <div className={styles.overlay}></div>}

      {/* Сайд-меню (бургер-меню для мобильных и планшетов) */}
      <div
        ref={menuRef}
        className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}
      >
        <nav className={styles.menu}>
          <ul>
            <li style={{ animationDelay: '0.1s' }}>
              <button onClick={() => handleClick('main')}>Главная</button>
            </li>
            <li style={{ animationDelay: '0.2s' }}>
              <button onClick={() => handleClick('about-us')}>О нас</button>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <button onClick={() => handleClick('products')}>
                Выбор кровати
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
