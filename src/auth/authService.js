import { auth } from '../firebase/firebaseConfig';

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
