import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((child) => {
// //     expenses.push({
// //       id: child.key,
// //       ...child.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   })

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: 'January',
// //   amount: 109500,
// //   createdAt: 23234234
// // });


// // database.ref('notes').push({
// //   title: 'COurse Topics',
// //   body: 'React, Native, Angular'
// // });

// // const firebaseNotes = {
// //   notes: {
// //     apolsjdhf: {
// //       title: 'First Note',
// //       body: 'This is my note'
// //     },
// //     eieiie: {
// //       title: 'Second Note',
// //       body: 'This is my note'
// //     }
// //   }
// // };

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });

// // setTimeout(() => {
// //   database.ref('age').set(28);
// // }, 3500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Matt',
// //   age: 47,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Lafayette',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Removed data');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });