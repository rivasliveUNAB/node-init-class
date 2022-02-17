// const dataNumber = Array.from(new Array(100).keys());

// const printItemArray = (item) => {
//   console.log(item);
// };

// // Anonimous Fucntions
// dataNumber.forEach(printItemArray);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// const miPrimeraPromise = new Promise((resolve, reject) => {
//   console.log("Empieza a ejecutar el async code");
//   setTimeout(() => {
//     resolve("¡Éxito!");
//   }, 5000); // time in ms 5000ms => 5s
// });

// const continousAfterPromise = (successMessage) => {
//   console.log("Finish code");
//   console.log("¡Sí! " + successMessage);
// };

// miPrimeraPromise.then(continousAfterPromise).catch((errors) => {
//   console.log(errors);
// });

// async function name(params) {
// }

// (async () => {
//   const miPrimeraPromise = new Promise((resolve, reject) => {
//     console.log("Empieza a ejecutar el async code");
//     setTimeout(() => {
//       // resolve("¡Éxito!");
//       reject("Error en clase");
//     }, 5000); // time in ms 5000ms => 5s
//   });

//   try {
//     const successMessage = await miPrimeraPromise;
//     console.log(successMessage);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("Finish code");
// })();

// const axios = require("axios");
// (async () => {
//   try {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/posts");

//     data.forEach(({ title }) => {
//       console.log(title);
//     });
//   } catch (errors) {
//     console.log(errors);
//   }
// })();

const { sum, less, createOperation } = require("./core");

const { operation, num1, num2 } = {
  operation: "SUM",
  num1: 10,
  num2: 5,
};

const isSum = operation === "SUM"; // true or false
createOperation(num1, num2, isSum ? sum : less);
