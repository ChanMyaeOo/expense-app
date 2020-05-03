import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZmAn1sfZzyjUf81wE_jvJ60oL58lufKU",
  authDomain: "expensify-4b340.firebaseapp.com",
  databaseURL: "https://expensify-4b340.firebaseio.com",
  projectId: "expensify-4b340",
  storageBucket: "expensify-4b340.appspot.com",
  messagingSenderId: "414531990526",
  appId: "1:414531990526:web:f03371e0a7d8e444b386af",
  measurementId: "G-3HL96ZLNNH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

database.ref("expenses").on("value", (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  console.log(expenses);
});

// database.ref("expenses").push({
//   description: "holiday",
//   note: "last sunday",
//   amount: 20000,
//   createdAt: 1000,
// });

// database.ref("expenses").push({
//   description: "food",
//   note: "last night",
//   amount: 4000,
//   createdAt: 3000,
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "last month",
//   amount: 50000,
//   createdAt: 9000,
// });

// database
//   .ref()
//   .set({
//     name: "Chan Myae Oo",
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: "Manager",
//       company: "Google",
//     },
//     location: {
//       city: "Mogok",
//       country: "Myanmar",
//     },
//     isSingle: true,
//   })
//   .then(() => {
//     console.log("Data is saved.");
//   })
//   .catch((e) => {
//     console.log("this failed : ", e);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed successfully.");
//   })
//   .catch((e) => {
//     console.log("failed to remove", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Yangon",
// });

// database
//   .ref("job/company")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("unable fetching data ", e);
//   });

// const onValueChange = database.ref().on("value", (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// setTimeout(() => {
//   database.ref("age").set(28);
// }, 3000);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 8000);
