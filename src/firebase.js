import firebase from 'firebase';

const config = {
      apiKey: "AIzaSyAL2ZUZ_ygEeBl161iLLl9Tr9hENnru7zE",
      authDomain: "whereabouts-lbv.firebaseapp.com",
      databaseURL: "https://whereabouts-lbv.firebaseio.com",
      projectId: "whereabouts-lbv",
      storageBucket: "",
      messagingSenderId: "750641655963"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;