// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkUserStatus } from '../auth/authService';

// Cria o contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Observa o estado de autenticação

    const unsubscribe = checkUserStatus((user) => {
      setUser(user);
      setLoading(false);
    });
    // Limpa o observador quando o componente desmonta
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
