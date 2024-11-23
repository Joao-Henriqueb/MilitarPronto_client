import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
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
    //updateUserStatus({ plan: 'free', isBlocked: false, question_used: 0 });

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
