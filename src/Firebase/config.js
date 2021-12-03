import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD716enAQThINzjNfQyddyZ_6n19xbva1k",
  authDomain: "coderhouse-react-f6008.firebaseapp.com",
  projectId: "coderhouse-react-f6008",
  storageBucket: "coderhouse-react-f6008.appspot.com",
  messagingSenderId: "626381045277",
  appId: "1:626381045277:web:1d6e1bd167a4ad5682d0f4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const itemData = async () => {
  const data = await getDocs(collection(db, 'coder-react'));
  let itemList = [];
  data.docs.map( doc => {
    itemList.push(doc.data());
  })
  return itemList;
}

export const getItemById = async (id) => {
  const data = await getDocs(collection(db, 'coder-react'));
  let item;
  data.docs.map( doc => {
    if( doc.data().id === parseInt(id)){
      item = doc.data();
    }
  })
  return item;
}

export const getCategories = async () => {
  const data = await getDocs(collection(db, 'categorias'));
  let categoryList = [];
  data.docs.map( doc => {
    categoryList.push(doc.data());
  })
  return categoryList;
}

export const subirDatosFirebase = (array) => {
  array.map( item => {
    addDoc(collection(db, 'coder-react'), item);
  })
}