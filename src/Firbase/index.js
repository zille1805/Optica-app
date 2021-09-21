import { initializeApp } from 'firebase/app';
import {
  getDoc,
  getFirestore,
  collection,
  setDoc,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  runTransaction,
  writeBatch
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7sThzSEgvZajTudK5SASru_NQztcrfcY",
  authDomain: "optica-imagen2.firebaseapp.com",
  projectId: "optica-imagen2",
  storageBucket: "optica-imagen2.appspot.com",
  messagingSenderId: "334279905388",
  appId: "1:334279905388:web:c2a9fc84fea7be084f0849",
  measurementId: "G-Z0BDDTFBYN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Getting db
export const db = getFirestore();

class FirebaseUtils {
  static isValidString(field) {
    return typeof field === 'string' && field != '';
  }

  static isValid(field) {
    return field != '';
  }

  static isValidOptions(options) {
    if (typeof options === 'object') {
      const isValidField = this.isValidString(options.field);
      const isValidCondition = this.isValidString(options.condition);
      const isValidValue = this.isValid(options.value);
      return isValidField && isValidCondition && isValidValue;
    }
    return false;
  }
}

export class Firebase {
  static getCollection(...pathSegments) {
    return collection(db, ...pathSegments);
  }

  static getDoc(...pathSegments) {
    return doc(db, ...pathSegments);
  }

  static get(path) {
    const pathSegments = path.split('/');
    const ref = this.getDoc(...pathSegments);
    return getDoc(ref);
  }

  static getAll(path, options) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);

    if (options != null) {
      return getDocs(
        query(ref, where('lista', '==', options))
      );
    }

    return getDocs(ref);
  }

  static set(path, obj) {
    const pathSegments = path.split('/');
    return setDoc(this.getDoc(...pathSegments), obj);
  }

  static add(path, obj) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);
    return addDoc(ref, obj);
  }

  static transaction(asyncFunc) {
    return runTransaction(db, asyncFunc);
  }

  static batch() {
    return writeBatch(db);
  }
}


