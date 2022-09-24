import { initializeApp } from 'firebase/app';
import { getDatabase, ref as databaseRef, update } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyCbNLt82eR-2vP8AjQysGvZfLBgQ6YpGs4",
  authDomain: "kavkaz-studio.firebaseapp.com",
  databaseURL: "https://kavkaz-studio-default-rtdb.firebaseio.com",
  projectId: "kavkaz-studio",
  storageBucket: "kavkaz-studio.appspot.com",
  messagingSenderId: "147236626052",
  appId: "1:147236626052:web:81b47c71c6a85d52a02cd1",
  measurementId: "G-PHNTV4Q9YD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export const dbRef = databaseRef(db);

export const uploadImage = async (image) => {
  const stRef = storageRef(storage, `/images/${image.name + v4()}`);
  
  return uploadBytes(stRef, image).then(() => {
    console.log("Image uploaded successfully!")
    return getDownloadURL(stRef).then(res => res).catch(err => console.log(err))
  }).catch(err => {
    console.log("Error uploading image", err)
  })
}

export const updateComments = (commentsList) => {
  const updates = {};
  updates['/comments/'] = commentsList;
  update(dbRef, updates).then(() => {
    console.log('Comment sent!')
  }).catch(err => console.log(err));
};

export const updateData = (changedData, place) => {
  const updates = {};
  updates[place] = changedData;
  update(dbRef, updates).then(() => {
    console.log('Changes saved!')
  }).catch(err => console.log(err));
};