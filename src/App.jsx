import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import QuestionsPage from './Components/QuestionsPage';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AuthModal from './Components/modal/AuthModal';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ErrorPage from './Components/ErrorPage';
import TermsOfUse from './Components/TermsOfUse';
import ResetPassword from './Components/ResetPassword';
import SupportPage from './Components/SupportPage';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ModalProvider>
            <Header />
            <AuthModal />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questoes" element={<QuestionsPage />} />
              <Route path="/redefinir-senha" element={<ResetPassword />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/suporte" element={<SupportPage />} />
              <Route
                path="/politica-de-privacidade"
                element={<PrivacyPolicy />}
              />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </ModalProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
