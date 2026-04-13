"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
// Calcula la media (promedio) de un array de números
// Retorna null si el array está vacío
function calcularMedia(datos) {
    if (datos.length === 0)
        return null;
    const suma = datos.reduce((acc, val) => acc + val, 0);
    return suma / datos.length;
}
// Calcula la mediana de un array de números
// Retorna null si el array está vacío
function calcularMediana(datos) {
    if (datos.length === 0)
        return null;
    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}
// Filtra valores atípicos que superan el límite dado
// Retorna null si el array está vacío
function filtrarAtipicos(datos, limite) {
    if (datos.length === 0)
        return null;
    const media = calcularMedia(datos);
    return datos.filter(val => Math.abs(val - media) <= limite);
}
