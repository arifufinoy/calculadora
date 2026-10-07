# Plan 001 — Registrar una materia con la nota del primer bimestre

Estado: borrador  
Spec: specs/001-registrar-materia/spec.md  
HU de origen: docs/historias/HU-001.md

## Objetivo

Implementar el flujo de registro de una materia y su nota del primer bimestre, de modo que el estudiante pueda guardar, consultar, conservar y eliminar materias locales sin introducir datos externos ni funcionalidades fuera de la historia.

## Alcance

- Registrar una materia válida con una nota decimal de 0 a 20 y hasta dos decimales.
- Validar el nombre y la nota antes de guardar.
- Evitar duplicados sin distinguir mayúsculas y minúsculas.
- Mostrar la materia registrada en la lista.
- Conservar las materias al cerrar y volver a abrir la aplicación.
- Pedir confirmación antes de eliminar una materia.
- Proteger el flujo mediante pruebas de lógica y verificación manual de la interfaz.

## Responsabilidades y componentes

### Reglas de negocio

- Se definirán funciones puras para validar el nombre, validar y normalizar la nota, comprobar duplicados y crear la materia registrada.
- Las funciones no dependerán de componentes React Native ni de almacenamiento.
- Las reglas se cubrirán primero con Jest, incluyendo los límites 0 y 20, los formatos permitidos y rechazados, y la comparación de nombres sin distinguir mayúsculas y minúsculas.
- El resultado de la validación se representará de forma explícita para permitir que la interfaz muestre el mensaje correcto junto al campo afectado.

**RF cubiertos:** RF-002, RF-003, RF-004, RF-005, RF-006, RNF-001, RNF-002, RNF-003.

### Persistencia local

- Se utilizará el almacenamiento local del dispositivo existente en el proyecto, sin sincronización ni cuenta externa.
- La persistencia se limitará a la colección de materias y conservará cada nota como valor numérico.
- La carga devolverá la colección guardada y la escritura reemplazará la colección actual con el estado actualizado.
- La operación de carga y guarda se comprobará con pruebas que usen el comportamiento real del mecanismo de almacenamiento disponible en Jest, sin pruebas centradas en detalles internos.

**RF cubiertos:** RF-001, RF-007, RF-008, RNF-004.

### Interfaz

- La pantalla de inicio se convertirá en el flujo de registro y lista para la historia.
- El formulario mostrará el nombre y la nota, los mensajes de validación junto al campo correspondiente y el estado de la operación.
- La lista mostrará cada materia una sola vez y formateará la nota con exactamente dos decimales.
- La eliminación se realizará únicamente después de una confirmación del usuario.
- La interfaz usará los componentes y el sistema de temas del proyecto sin introducir nuevos estilos o dependencias.

**RF cubiertos:** RF-001, RF-004, RF-005, RF-006, RF-008, RF-009, RNF-002, RNF-003.

## Algoritmo de comportamiento

1. Cargar las materias guardadas al abrir el flujo.
2. Leer el nombre y la nota introducidos por el estudiante.
3. Validar el nombre y la nota; si existe un error, mostrarlo junto al campo afectado y no guardar.
4. Comprobar si el nombre ya existe sin distinguir mayúsculas y minúsculas; si existe, mostrar el mensaje duplicado y no guardar.
5. Crear la materia con la nota numérica normalizada y añadirla a la colección.
6. Guardar la colección actualizada y mostrarla en la lista.
7. Limpiar los campos del formulario después de un registro válido.
8. Al eliminar una materia, confirmar la acción y después borrar la materia de la colección y persistir el estado actualizado.

## Decisiones justificadas

### Elegir funciones puras para las reglas

Se mantienen las reglas fuera de la interfaz para que las validaciones y la comparación de duplicados puedan probarse de forma independiente y para evitar que el comportamiento cambie según el componente que lo consume.

### Elegir el almacenamiento local existente

Se utiliza el mecanismo de persistencia ya incluido en el proyecto. No se introduce una dependencia ni un servicio externo, porque la historia exige conservar los datos en el dispositivo y no define una sincronización.

### Elegir una única pantalla para el flujo

Se evita crear una navegación o un flujo separado para la historia, porque el alcance no requiere herramientas adicionales ni una ruta propia. La pantalla conservará el formulario y la lista en el mismo contexto de uso.

### Alternativa descartada

- No se añadirá una dependencia de validación: el formato y el rango se implementarán con las funciones puras del proyecto para mantener el comportamiento predecible y no ampliar el conjunto de dependencias.
- No se implementará una sincronización ni una cuenta: ambos requisitos quedan fuera del alcance de HU-001.
- No se permitirá que dos materias tengan el mismo nombre: la comparación de duplicados se ejecutará antes de guardar.

## Estrategia de pruebas

- Jest: pruebas unitarias de las funciones puras para todos los casos de validación, límites, formato decimal, duplicados y creación de materia.
- Jest: pruebas de persistencia local para cargar, guardar y conservar la colección entre operaciones.
- Jest: pruebas del comportamiento de la colección para impedir duplicados y confirmar que la lista contiene cada materia una sola vez.
- Verificación manual en Expo Go: registro válido, validaciones de nombre y nota, duplicado, conservación al cerrar y volver, y confirmación de eliminación.
- Validación final: ejecución de `npx tsc --noEmit`, `npx expo lint` y `npx jest --runInBand`.

## Cobertura por requisitos

- RF-001: creación, guardado y visualización.
- RF-002: aceptación de nombres con números y rechazo de nombres sin carácter no blanco.
- RF-003: aceptación de notas decimales con hasta dos decimales y rango 0-20.
- RF-004: rechazo de nota vacía, inválida, fuera de rango, no decimal o con coma.
- RF-005: rechazo de nombre vacío y mensaje junto al campo.
- RF-006: detección de duplicado sin distinguir mayúsculas y minúsculas y mensaje junto al campo.
- RF-007 y RF-008: persistencia local y disponibilidad tras volver.
- RF-009: confirmación antes de eliminar.
- RNF-001 a RNF-004: reglas no funcionales y restricciones de alcance.

## Criterios de aceptación del plan

- Las tareas están ordenadas por dependencia.
- Cada tarea tiene un resultado verificable y una cobertura explícita de requisitos.
- No se modifica la especificación ni se introduce una funcionalidad fuera de HU-001.
- La implementación no comienza hasta que el usuario apruebe el plan.
