import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  if (window.confirm('Are you sure you want to signout?')) {
    firebase.auth().signOut();
  }
};

export { signIn, signOut };
