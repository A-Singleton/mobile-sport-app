import * as firebase from 'firebase';

// Initialize Firebase
 const firebaseConfig = {
   apiKey: "AIzaSyDrTzX0nVdFUIuBvBA0OldyjRjHmvymIls",
   authDomain: "add-users-to-app.firebaseapp.com",
   databaseURL: "https://add-users-to-app.firebaseio.com",
   storageBucket: "add-users-to-app.appspot.com",
 };
 export const firebaseApp = firebase.initializeApp(firebaseConfig);

export function reportMatch(text, homeScore, awayScore) {

   getRef = firebaseApp.database().ref();


  itemsRef = this.getRef.child('items');

  itemsRef.push({ title: text,
                       homeScore: homeScore,
                       awayScore: awayScore
    })
}
