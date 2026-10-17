//RESUELVE LOS EJERCICIOS AQUÍ
// Ejercicio 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;

// Ejercicio 2
const [{ email: emailLuis }] = empleados;

// Ejercicio 3
let a = 5;
let b = 3;

[a, b] = [b, a];

// Ejercicio 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

// Ejercicio 5
const sumEveryOther = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

// Ejercicio 6
const addOnlyNums = (...args) => {
  return args
    .filter((arg) => typeof arg === "number")
    .reduce((total, number) => total + number, 0);
};

// Ejercicio 7
const countTheArgs = (...args) => {
  return args.length;
};

// Ejercicio 8
const combineTwoArrays = (array1, array2) => {
  return [...array1, ...array2];
};

// Ejercicio 9
const onlyUniques = (...args) => {
  return [...new Set(args)];
};
