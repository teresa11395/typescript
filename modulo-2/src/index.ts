import { generarReporte, EstadoMatricula } from './domain/types/index.js';
import { obtenerRecurso, RespuestaAPI } from './services/api-client.js';
import { Estudiante, Asignatura } from './domain/types/index.js';

// ================================
// PROBANDO LA UNIÓN DISCRIMINADA
// ================================

const matriculaActiva: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas: [
    { id: "1", nombre: "Matemáticas", creditos: 6, profesor: "Dr. López" },
    { id: "2", nombre: "Programación", creditos: 9, profesor: "Dra. Pérez" }
  ]
};

const matriculaSuspendida: EstadoMatricula = {
  tipo: "SUSPENDIDA",
  motivoSuspension: "Impago de matrícula"
};

const matriculaFinalizada: EstadoMatricula = {
  tipo: "FINALIZADA",
  notaMedia: 8.5
};

console.log("=== Reportes de matrícula ===");
console.log(generarReporte(matriculaActiva));
console.log(generarReporte(matriculaSuspendida));
console.log(generarReporte(matriculaFinalizada));

// ================================
// PROBANDO EL SERVICIO GENÉRICO
// ================================

console.log("\n=== Servicio genérico de datos ===");

obtenerRecurso<Estudiante>("estudiantes/1")
  .then((respuesta: RespuestaAPI<Estudiante>) => {
    console.log("Estudiante encontrado:", respuesta.datos.nombre, respuesta.datos.apellidos);
  })
  .catch((error) => {
    console.error("Error:", error.errores);
  });

obtenerRecurso<Asignatura>("asignaturas/1")
  .then((respuesta: RespuestaAPI<Asignatura>) => {
    console.log("Asignatura encontrada:", respuesta.datos.nombre, "- Créditos:", respuesta.datos.creditos);
  })
  .catch((error) => {
    console.error("Error:", error.errores);
  });

// Recurso que no existe
obtenerRecurso<Estudiante>("estudiantes/999")
  .then(() => {})
  .catch((error) => {
    console.error("Recurso no encontrado:", error.errores);
  });