import * as firebase from "firebase/app";
import "firebase/firebase-firestore"

const firebaseConfig = {
    apiKey: "AIzaSyARev44NhnF6sR3_6HdIYWn6gWRUyl6pSA",
    authDomain: "book-store-29e0f.firebaseapp.com",
    databaseURL: "https://book-store-29e0f.firebaseio.com",
    projectId: "book-store-29e0f",
    storageBucket: "book-store-29e0f.appspot.com",
    messagingSenderId: "455271077798",
    appId: "1:455271077798:web:31a4eec65b0b11bcc8e167"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const books = db.collection("books").get();

export const getBooks = () => {
    return books.then((snapshot) => {
        return snapshot.docs.map(doc => {
            return doc.data();
        });
    })
        .catch(error => new Error(error));
};