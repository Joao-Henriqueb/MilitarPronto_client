import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebaseConfig';
const apiUrl = import.meta.env.VITE_API_URL;

//verifica se usario esta logado ou não
export const checkUserStatus = (callback) => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('Usuário logado:', user);
      callback(user); // Chama o callback passando o usuário
    } else {
      console.log('Usuário não logado');
      callback(null);
    }
  });
};

// função para logar usuario
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user; //retorna usuario logado
  } catch (error) {
    console.error('Erro ao logar:', error);
    throw error;
  }
};

// login com google
export const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithRedirect(auth, googleProvider);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao fazer login com Google', error.message);
    throw error;
  }
};

export const handleRedirectResult = async () => {
  try {
    const userCredential = await getRedirectResult(auth);

    if (userCredential) {
      const { uid, email, displayName } = userCredential.user;

      // Salva o usuário no banco de dados
      const registerResponse = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid,
          email,
          username: displayName,
        }),
      });

      if (!registerResponse.ok) {
        throw new Error(
          'Erro ao salvar o usuário no banco após login com Google',
        );
      }

      console.log('Usuário salvo no banco com sucesso');
      return userCredential.user;
    } else {
      console.log('Nenhum resultado de redirecionamento encontrado');
    }
  } catch (error) {
    console.error(
      'Erro ao processar resultado do redirecionamento:',
      error.message,
    );
    throw error;
  }
};

//criar conta
export const registerUser = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, {
      displayName: username,
    });
    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        uid: userCredential.user.uid,
        email,
        username,
      }),
    });

    if (!response.ok) {
      // Se o banco falhar, deletar a conta no Firebase
      userCredential.user.delete();
      throw new Error('Erro ao salvar o usuário no banco');
    }
    await sendEmailVerification(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao criar conta :', error);
    throw error;
  }
};

// função para deslogar usuario
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Erro ao deslogar:', error);
  }
};

//reenviar email de confirmaçãõ
export const handleResendEmail = async (setMessage, setIsSending) => {
  const cooldownTime = 60 * 1000; // 1 minuto
  const lastSent = localStorage.getItem('lastVerificationEmailSent');

  if (lastSent && Date.now() - lastSent < cooldownTime) {
    const remainingTime = Math.ceil(
      (cooldownTime - (Date.now() - lastSent)) / 1000,
    );
    setMessage(
      `Por favor, aguarde ${remainingTime} segundos antes de reenviar.`,
    );
    return;
  }

  const user = auth.currentUser;

  if (user) {
    try {
      setIsSending(true);
      await sendEmailVerification(user);
      localStorage.setItem('lastVerificationEmailSent', Date.now());
      setMessage('E-mail de verificação reenviado com sucesso!');
    } catch (error) {
      console.error('Erro ao reenviar e-mail:', error);
      console.log(error);
      setMessage('Houve um erro ao tentar reenviar o e-mail.');
    } finally {
      setIsSending(false);
    }
  } else {
    setMessage('Usuário não autenticado.');
  }
};
