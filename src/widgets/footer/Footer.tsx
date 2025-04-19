import { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__contact">
        <p>Email: contact@example.com</p>
        <p>Телефон: +7 (123) 456-78-90</p>
      </div>
    </footer>
  );
};
