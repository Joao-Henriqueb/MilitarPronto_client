import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebaseConfig';

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
    console.log('usuario logado', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao fazer login com Google', error.message);
    throw error;
  }
};

//criar conta
export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, {
      displayName: name,
    });
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
