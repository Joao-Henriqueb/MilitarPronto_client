import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Questoes from './Components/Questoes/Questoes';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AuthModal from './Components/modal/AuthModal';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ErrorPage from './Components/ErrorPage';
import TermsOfUse from './Components/TermsOfUse';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/*<AuthModal />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questoes" element={<Questoes />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
