// ================================
// INTERFAZ GENÉRICA DE RESPUESTA API
// ================================

export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

// ================================
// SERVICIO GENÉRICO DE DATOS
// ================================

const baseDatos: Record<string, unknown> = {
  "estudiantes/1": { id: "1", nombre: "Ana", apellidos: "García", email: "ana@uni.es", fechaNacimiento: new Date("2000-01-15"), curso: 2 },
  "estudiantes/2": { id: "2", nombre: "Luis", apellidos: "Martínez", email: "luis@uni.es", fechaNacimiento: new Date("1999-03-22"), curso: 3 },
  "asignaturas/1": { id: "1", nombre: "Matemáticas", creditos: 6, profesor: "Dr. López" },
  "asignaturas/2": { id: "2", nombre: "Programación", creditos: 9, profesor: "Dra. Pérez" },
};

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = baseDatos[endpoint];
      if (datos) {
        resolve({
          codigoEstado: 200,
          exito: true,
          datos: datos as T,
        });
      } else {
        reject({
          codigoEstado: 404,
          exito: false,
          datos: null,
          errores: [`Recurso no encontrado: ${endpoint}`],
        });
      }
    }, 500);
  });
}