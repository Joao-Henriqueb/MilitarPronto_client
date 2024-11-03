import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Questoes from './Components/Questoes/Questoes';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AuthModal from './Components/modal/AuthModal';
import About from './Components/About';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
