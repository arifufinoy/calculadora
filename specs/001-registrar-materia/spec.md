# Spec 001 — Registrar una materia con la nota del primer bimestre

Estado: Aprobado  
HU de origen: docs/historias/HU-001.md

## Contexto y objetivo

El estudiante necesita registrar una materia y su nota del primer bimestre para conservarla localmente y completarla posteriormente con la nota del segundo bimestre.

## Usuarios

- Estudiante que registra materias en la aplicación.

## Historias de usuario

### HU-001 - Registrar una materia con la nota del primer bimestre

Como estudiante, quiero guardar una materia con la nota de mi primer bimestre, para tenerla registrada y completarla cuando salga la del segundo.

## Definiciones

- Materia: nombre de una categoría de estudio que puede registrarse una sola vez.
- Nota del primer bimestre: valor numérico decimal que se guarda junto con la materia.
- Lista de materias: conjunto de materias guardadas en el dispositivo del usuario.
- Nombre repetido: nombre que coincide con una materia ya guardada sin distinguir mayúsculas y minúsculas.

## Requisitos funcionales

### Registro

- **RF-001:** CUANDO el estudiante ingresa un nombre válido y una nota válida del primer bimestre, EL SISTEMA guarda la materia con su nota y la muestra en la lista. Origen: Escenario "Guardar una materia".
- **RF-002:** CUANDO el estudiante ingresa un nombre que no es vacío ni contiene únicamente caracteres en blanco, EL SISTEMA acepta el nombre aunque pueda contener números. Origen: Decisión 2 de decisiones.md.
- **RF-003:** CUANDO el estudiante ingresa una nota decimal con hasta dos decimales, EL SISTEMA acepta la nota cuando el valor está entre 0 y 20, incluyendo ambos límites, y ignora los espacios al inicio y al final. Origen: Decisiones 1 y 4 de decisiones.md.
- **RF-004:** CUANDO el estudiante ingresa una nota vacía, una nota inválida, una nota que sea menor que 0 o mayor que 20, una nota no decimal con hasta dos decimales o una nota con coma, EL SISTEMA muestra "Escribe una nota entre 0 y 20 con hasta dos decimales." y no guarda la materia. Origen: Escenario "Datos incompletos o inválidos" y decisiones 1, 4 y 10 de decisiones.md.
- **RF-005:** CUANDO el estudiante deja el nombre vacío o contiene únicamente caracteres en blanco, EL SISTEMA muestra "Escribe el nombre de la materia." junto al campo del nombre y no guarda la materia. Origen: Escenario "Datos incompletos o inválidos" y decisión 2 de decisiones.md.
- **RF-006:** CUANDO el estudiante intenta registrar un nombre que coincide con una materia ya guardada sin distinguir mayúsculas y minúsculas, EL SISTEMA muestra "Ya tienes una materia con ese nombre." junto al campo del nombre y no duplica la materia. Origen: Escenario "Materia repetida" y decisión 3 de decisiones.md.

### Conservación

- **RF-007:** EL SISTEMA conserva las materias registradas en el dispositivo del usuario sin sincronización ni cuenta externa. Origen: Decisión 6 de decisiones.md.
- **RF-008:** CUANDO el estudiante cierra y vuelve a abrir la aplicación, EL SISTEMA muestra las materias registradas con su nota. Origen: Escenario "Conservar mis datos" y decisión 6 de decisiones.md.
- **RF-009:** CUANDO el estudiante solicite eliminar una materia, EL SISTEMA pide confirmación antes de borrar la materia. Origen: Decisión 7 de decisiones.md.

## Requisitos no funcionales

- **RNF-001:** La operación de registrar debe validar el nombre y la nota antes de guardar cualquier dato. Origen: RF-004 y RF-005.
- **RNF-002:** La nota guardada debe conservar su valor numérico y mostrarse con exactamente dos decimales. Origen: Decisión 5 de decisiones.md.
- **RNF-003:** La lista debe mostrar cada materia registrada una sola vez. Origen: RF-006.
- **RNF-004:** La aplicación no debe crear ni modificar datos externos al dispositivo del usuario. Origen: Decisión 6 de decisiones.md.

## Casos límite

- Nombre con espacios en blanco: inválido.
- Nombre con números: válido.
- Nota 0: válido.
- Nota 20: válido.
- Nota inferior a 0: inválida.
- Nota superior a 20: inválida.
- Nota decimal con tres o más decimales: inválida.
- Nota con una o dos decimales: válida.
- Nombre repetido con diferencias de mayúsculas: repetido.
- Materia registrada antes de cerrar la aplicación: debe conservarse al volver.

## Fuera de alcance

- Registro de la nota del segundo bimestre.
- Cálculos de promedio, promoción o estado final.
- Gestión de usuarios, cuentas, autenticación o sincronización.
- Dos materias con el mismo nombre.
- Cambios de la materia registrada después de su guardado.
- Categorías, imágenes, colores o preferencias de materia.
- Servicios externos de almacenamiento.

## Criterios de finalización

- El estudiante puede registrar una materia válida y ver la materia en la lista.
- Los datos incompletos o inválidos no se guardan.
- Una materia repetida no se duplica.
- Las materias guardadas permanecen disponibles al volver a abrir la aplicación.
- La eliminación requiere confirmación.
- Las reglas de validación y repetición están cubiertas por pruebas de lógica.
- La interfaz permite realizar el flujo de registro y mostrar el resultado.

## Dudas abiertas

- No hay dudas abiertas en los requisitos de HU-001; las decisiones de decisions.md resuelven los puntos ambiguos.
