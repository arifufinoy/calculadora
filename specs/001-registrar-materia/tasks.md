# Tareas 001 — Registrar una materia con la nota del primer bimestre

Estado: borrador  
Plan: specs/001-registrar-materia/plan.md

## T1. Reglas de validación y creación

- [x] **Crear las funciones puras para validar nombre, nota y materia.** RF-002, RF-003, RF-004, RF-005, RNF-001, RNF-002
  - Hecho cuando: las pruebas de lógica cubren nombre vacío, espacios en blanco, números en el nombre, nota 0, nota 20, nota inferior y superior a 0 y 20, nota con uno o dos decimales, nota con tres decimales, nota con coma y espacios alrededor de la nota.

## T2. Repetición de materias

- [ ] **Implementar la comprobación de duplicados y la creación de materia.** RF-006, RNF-003
  - Hecho cuando: las pruebas confirman que nombres iguales sin distinguir mayúsculas y minúsculas se consideran repetidos y que una materia válida no se duplica.

## T3. Operación de colección

- [ ] **Implementar la operación de añadir, listar y eliminar materias.** RF-001, RF-009, RNF-003
  - Hecho cuando: las pruebas verifican que cada materia aparezca una sola vez y que la operación de eliminación updates la colección cuando se ejecuta desde la interfaz.

## T4. Persistencia local

- [ ] **Implementar la carga y el guardado de la colección local.** RF-007, RF-008, RNF-004
  - Hecho cuando: las pruebas de almacenamiento confirman que una colección guardada permanece disponible entre operaciones y que no se utiliza ninguna conexión o servicio externo.

## T5. Formulario de registro

- [ ] **Integrar el formulario de nombre y nota en la interfaz.** RF-001, RF-004, RF-005, RF-006
  - Hecho cuando: el estudiante puede ingresar ambos datos, ver los mensajes junto al campo afectado y no guardar cuando el formulario es inválido o contiene un duplicado.

## T6. Lista y formato de nota

- [ ] **Mostrar la colección registrada con notas de dos decimales.** RF-001, RF-008, RNF-002, RNF-003
  - Hecho cuando: la lista muestra las materias guardadas, conserva el valor numérico y muestra cada nota con exactamente dos decimales.

## T7. Confirmación de eliminación

- [ ] **Añadir la confirmación antes de eliminar una materia.** RF-009
  - Hecho cuando: la interfaz pide confirmación y no elimina la materia cuando el estudiante cancela la operación.

## T8. Verificación de flujo completo

- [ ] **Validar el flujo de registro, duplicado, conservación y eliminación en Expo Go.** RF-001 a RF-009
  - Hecho cuando: el estudiante puede registrar una materia, corregir invalidaciones, evitar duplicados, cerrar y volver, y eliminar con confirmación en la aplicación.

## T9. Validación final

- [ ] **Ejecutar las comprobaciones de tipo, estilo y pruebas.** RNF-001 a RNF-004
  - Hecho cuando: `npx tsc --noEmit`, `npx expo lint` y `npx jest --runInBand` finalizan sin errores y la lista manual de la tarea T8 está confirmada.

## Orden de ejecución

1. T1 y T2 pueden completarse en orden porque T2 necesita las reglas de validación.
2. T3 depende de T2.
3. T4 depende de T3.
4. T5 depende de T1, T2 y T4.
5. T6 depende de T4 y T5.
6. T7 depende de T3 y T4.
7. T8 depende de T5, T6 y T7.
8. T9 depende de T8.

## Criterios de cierre

- Cada tarea tiene una comprobación verificable.
- Las pruebas de lógica cubren los casos límite y la validación de duplicados.
- La verificación manual confirma el flujo en Expo Go.
- No se incluyen tareas para la nota del segundo bimestre, cálculos, usuarios, sincronización o servicios externos.
