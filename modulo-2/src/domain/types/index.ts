// ================================
// ENTIDADES DEL SISTEMA UNIVERSITARIO
// ================================

// Interfaz para un Estudiante
export interface Estudiante {
  readonly id: string;        // readonly: el ID no puede cambiar una vez creado
  nombre: string;
  apellidos: string;
  email: string;
  fechaNacimiento: Date;
  curso: number;
}

// Interfaz para una Asignatura
export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  profesor: string;
}

// ================================
// UNIÓN DISCRIMINADA: EstadoMatricula
// ================================

// Matrícula activa: tiene asignaturas en curso
interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

// Matrícula suspendida: tiene un motivo
interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}

// Matrícula finalizada: tiene nota media
interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

// La unión discriminada une los tres estados
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

// ================================
// FUNCIÓN: generarReporte
// ================================

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas.`;
    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivoSuspension}`;
    case "FINALIZADA":
      return `Matrícula finalizada con nota media: ${estado.notaMedia}`;
  }
}