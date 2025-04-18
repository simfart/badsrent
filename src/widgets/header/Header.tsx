import { FC } from 'react';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Логотип" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#products">Продукты</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
