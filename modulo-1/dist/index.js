"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_js_1 = require("./math-utils.js");
// Datos de prueba
const datos = [10, 20, 30, 40, 50, 100, 200];
console.log("=== Análisis estadístico ===");
console.log("Datos:", datos);
console.log("Media:", (0, math_utils_js_1.calcularMedia)(datos));
console.log("Mediana:", (0, math_utils_js_1.calcularMediana)(datos));
console.log("Sin atípicos (límite 50):", (0, math_utils_js_1.filtrarAtipicos)(datos, 50));
// Caso límite: array vacío
const datosVacios = [];
console.log("\n=== Array vacío ===");
console.log("Media:", (0, math_utils_js_1.calcularMedia)(datosVacios));
console.log("Mediana:", (0, math_utils_js_1.calcularMediana)(datosVacios));
console.log("Sin atípicos:", (0, math_utils_js_1.filtrarAtipicos)(datosVacios, 50));
