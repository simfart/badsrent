import { FC } from 'react';
import Header from 'widgets/header/Header';
import { MainContent } from 'features/mainContent/MainContent';
import { Footer } from 'features/footer/Footer';

import './styles/global.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
