# Documentación de arquitectura — Módulo 2

## Modelo de datos

### ¿Por qué `interface` para `Estudiante` y `Asignatura`?
Se ha usado `interface` porque representan entidades del dominio — 
objetos con estructura jerárquica y propiedades concretas. 
Las interfaces son el estándar para modelar objetos en TypeScript.

### ¿Por qué `type` para `EstadoMatricula`?
Se ha usado `type` porque es una unión de tres estados posibles. 
Los `type` son ideales para uniones, ya que `interface` no permite definirlas.

## Unión Discriminada

`EstadoMatricula` tiene tres estados: `ACTIVA`, `SUSPENDIDA` y `FINALIZADA`.
Cada uno tiene una propiedad `tipo` que actúa como discriminante.
Esto permite a TypeScript saber exactamente qué propiedades existen en cada caso,
eliminando errores en tiempo de ejecución.

## Genéricos

`RespuestaAPI<T>` y `obtenerRecurso<T>` usan genéricos para reutilizar 
la misma lógica con cualquier tipo de dato (Estudiante, Asignatura, etc.)
sin perder la seguridad de tipos. Sin genéricos habría que repetir 
el mismo código para cada entidad.