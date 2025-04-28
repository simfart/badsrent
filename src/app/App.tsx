import { FC } from 'react';
import { Footer } from 'widgets/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'widgets/header';
import { MainContent } from 'features/mainContent';
import { ContactForm } from 'shared/сontactForm';
import './styles/global.scss';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <MainContent />
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};
