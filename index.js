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

