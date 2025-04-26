import { FC } from 'react';
import styles from './Footer.module.scss';
import { mailIcon, phoneIcon, telegramIcon } from 'shared/assets/images';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.contacts}>
        <a href="tel:+79789410960" className={styles.contactItem}>
          <img src={phoneIcon} alt="Phone" />
          <span>+7 (978) 941-09-60</span>
        </a>
        <a href="mailto:example@example.com" className={styles.contactItem}>
          <img src={mailIcon} alt="Email" />
          <span>example@example.com</span>
        </a>
        <a
          href="https://t.me/arenda_trenazherov_crimea"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" />
          <span>@arenda_trenazherov_crimea</span>
        </a>
      </div>
    </footer>
  );
};
