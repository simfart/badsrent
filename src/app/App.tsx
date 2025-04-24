import { FC } from 'react';
import './styles/global.scss';
import { MainContent } from 'features/mainContent/MainContent';
import { Footer } from 'widgets/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'widgets/header';

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
