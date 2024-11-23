// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkUserStatus } from '../auth/authService';
const apiUrl = import.meta.env.VITE_API_URL;

// Função para buscar plano do usuário

const fetchUserPlan = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/users/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Falha ao buscar plano do usuário');
    }

    const data = await response.json();
    return data; // Retorna os dados do plano
  } catch (error) {
    console.error('Erro ao obter plano do usuário:', error.message);
    return null; // Retorna null em caso de erro
  }
};

// Cria o contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState('free');
  const [loading, setLoading] = useState(true);

  const updateUserStatus = (newStatus) => {
    setUserStatus((prevStatus) => ({
      ...prevStatus,
      ...newStatus,
    }));
  };

  useEffect(() => {
    const unsubscribe = checkUserStatus(async (user) => {
      setUser(user); // Atualiza o usuário
      setLoading(false); // Remove o estado de carregamento

      if (user) {
        // Busca o plano do usuário somente se logado
        const planData = await fetchUserPlan(user.accessToken);
        if (planData) {
          setUserStatus(planData); // Atualiza o estado do plano
        }
      } else {
        setUserStatus('free'); // Define como free para usuários não logados
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, userStatus, updateUserStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};
