// Object destructuring
// const person = {
//   age: 24,
//   location: {
//     city: "Mogok",
//     temp: 78,
//   },
// };

// const { name: firstName = "chan", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature = 80 } = person.location;

// if (city && temperature) {
//   console.log(`${city} is currently ${temperature}`);
// }

// const book = {
//   title: "RoadMap for your success",
//   author: "JohnCMaxwell",
//   publish: {
//     name: "Green House",
//   },
// };

// const { name: bookPublisher = "self publish" } = book.publish;

// console.log(bookPublisher);

// Array Destructuring

// const address = ["Minn Street", "Mogok", "Mandalay", "11011"];
// const [, city, state = "Yangon"] = address;
// console.log(`You are in ${city} ${state}.`);

// const item = ["Coffee (hot)", "2.00", "2.50", "2.75"];

// const [name, , mediumPrice] = item;

// console.log(`Medium ${name} is ${mediumPrice}$`);

// Revision Object Destructuring
// const person = {
//   age: 22,
//   location: {
//     state: "Pensavenia",
//     zip: 22010,
//   },
// };

// const { name = "John", age } = person;
// const { city: cityName = "Los Angele", state } = person.location;
// console.log(`${name} is in ${cityName} ${state}`);

// Revision Array Destructuring
const address = [];
const [name = "Joe", country = "Myanmar"] = address;
console.log(`${name} lives in ${country}`);
