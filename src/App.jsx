import React, { useEffect } from 'react';

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
import AdminPage from './Components/AdminPage';
import { handleRedirectResult } from './auth/authService';
import MercadoPago from './Components/MercadoPago';
import Plans from './Components/Plano';
import BrickScreen from './Components/BrickScreen';

function App() {
  //
  useEffect(() => {
    handleRedirectResult().then((user) => {
      if (user) {
        console.log('Usuário autenticado após redirecionamento:', user);
      }
    });
  }, []);
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ModalProvider>
            <Header />
            <AuthModal />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/planos" element={<Plans />} />
              <Route path="/questoes" element={<QuestionsPage />} />
              <Route path="/redefinir-senha" element={<ResetPassword />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/suporte" element={<SupportPage />} />
              <Route
                path="/politica-de-privacidade"
                element={<PrivacyPolicy />}
              />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              <Route path="/pagamento" element={<MercadoPago />} />
              <Route path="/status-pagamento" element={<BrickScreen />} />

              <Route path="*" element={<ErrorPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
            <Footer />
          </ModalProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
