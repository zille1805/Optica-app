
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
  apiKey: "AIzaSyBcIUMSN9PFj0FHNr4zLr6LR5pZya5ToSc",
  authDomain: "optica-imagen.firebaseapp.com",
  projectId: "optica-imagen",
  storageBucket: "optica-imagen.appspot.com",
  messagingSenderId: "990829906413",
  appId: "1:990829906413:web:f8ccee4e94510150877fe4"
};



// Initialize Firebase
initializeApp(firebaseConfig);
// Getting db
const db = getFirestore();

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

    const isValid = FirebaseUtils.isValidOptions(options);
    if (isValid) {
      return getDocs(
        query(ref, where(options.field, options.condition, options.value))
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
