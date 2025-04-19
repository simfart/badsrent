import { FC } from 'react';
import './styles/global.scss';
import Header from 'widgets/header/Header';
import { MainContent } from 'features/mainContent/MainContent';
import { Footer } from 'widgets/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
