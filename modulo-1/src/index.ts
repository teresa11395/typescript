import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

// Datos de prueba
const datos: number[] = [10, 20, 30, 40, 50, 100, 200];

console.log("=== Análisis estadístico ===");
console.log("Datos:", datos);
console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atípicos (límite 50):", filtrarAtipicos(datos, 50));

// Caso límite: array vacío
const datosVacios: number[] = [];
console.log("\n=== Array vacío ===");
console.log("Media:", calcularMedia(datosVacios));
console.log("Mediana:", calcularMediana(datosVacios));
console.log("Sin atípicos:", filtrarAtipicos(datosVacios, 50));