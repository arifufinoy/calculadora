# Decisiones de la historia HU-001

## 1. Rango de la nota

**Pregunta:** ¿Qué rango debe aceptar la nota del primer bimestre?

**Respuesta:** De `0` a `20`, incluyendo ambos límites.

**Motivo:** El rango permitido queda definido en la historia y debe aplicarse tanto a los valores inferiores como a los superiores.

## 2. Validación del nombre

**Pregunta:** ¿Qué condiciones debe cumplir el nombre de la materia?

**Respuesta:** Debe contener al menos un carácter no blanco y no debe contener únicamente caracteres en blanco. Puede contener números.

**Motivo:** El nombre debe ser reconocible y no vacío, sin imponer una longitud máxima ni una restricción adicional sobre los números.

## 3. Repetición de materias

**Pregunta:** ¿Cuándo se considera que una materia está repetida?

**Respuesta:** Cuando el nombre coincide exactamente con una materia ya guardada, incluyendo mayúsculas y minúsculas.

**Motivo:** Evita duplicados de una misma materia y establece una comparación clara y predecible.

## 4. Formato de la nota

**Pregunta:** ¿Qué formato debe aceptar la nota?

**Respuesta:** Valores decimales con hasta dos decimales, incluyendo valores con una o dos decimales, como `9.0` y `9.00`.

**Motivo:** La nota debe aceptar el formato decimal requerido y normalizarlo para mostrarlo con dos decimales.

## 5. Conservación del formato de la nota

**Pregunta:** ¿Cómo debe representarse la nota guardada?

**Respuesta:** Debe guardarse como número y mostrarse con exactamente dos decimales.

**Motivo:** La nota conserva su valor numérico mientras se presenta en el formato solicitado.

## 6. Almacenamiento local

**Pregunta:** ¿Dónde deben guardarse las materias?

**Respuesta:** En el dispositivo del usuario, sin sincronización ni cuenta.

**Motivo:** La historia exige conservar los datos del usuario y no define ningún servicio externo o sistema de sincronización.

## 7. Confirmación de eliminación

**Pregunta:** ¿La eliminación de una materia debe requerir confirmación del usuario?

**Respuesta:** Sí. La eliminación debe pedir confirmación antes de borrar la materia.

**Motivo:** La constitución exige conservar los datos del usuario y proteger los datos del usuario ante cambios o eliminaciones accidentales.

## 8. Textos de validación

**Pregunta:** ¿Qué mensajes deben mostrarse para los campos de nombre y nota?

**Respuesta:** El nombre vacío debe mostrar "Escribe el nombre de la materia."; una nota vacía o inválida debe mostrar "Escribe una nota entre 0 y 20 con hasta dos decimales."; una materia duplicada debe mostrar "Ya tienes una materia con ese nombre.".

**Motivo:** Los mensajes deben indicar qué corregir y proporcionar una respuesta clara al estudiante.

## 9. Ubicación de los avisos

**Pregunta:** ¿Dónde debe aparecer el aviso de nombre duplicado?

**Respuesta:** Debe aparecer junto al campo del nombre, igual que el aviso de nombre vacío.

**Motivo:** El estudiante debe identificar el campo afectado sin buscar el mensaje en otra ubicación.

## 10. Validación de la nota

**Pregunta:** ¿Qué debe hacerse con los espacios y la coma en la nota?

**Respuesta:** Se ignoran los espacios al inicio y al final de la nota. La coma se rechaza con el mismo mensaje de nota inválida.

**Motivo:** La nota debe aceptar el formato decimal definido sin interpretar la coma como separador decimal.
