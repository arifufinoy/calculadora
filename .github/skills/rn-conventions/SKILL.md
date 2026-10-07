name: rn-conventions
description: Úsala siempre que crees o modifiques pantallas, formularios o
componentes de interfaz de la Calculadora de Supletorio.

# Convenciones de interfaz en React Native

- Estilos con StyleSheet. Sin librerias de interfaz adicionales.
- Evitar diseños genéricos.
- Campos de nota: teclado numérico decimal (keyboardType="decimal-pad"). Según
el idioma del telefono, ese teclado puede escribir coma o punto como
separador decimal.
- Los formularios no deben quedar tapados por el teclado. Usa un contenedor
que se desplace o ajuste, y permite tocar botones con el teclado abierto.
- Respeta las áreas seguras del dispositivo (muesca y barras del sistema).
- Listas con FlatList y una clave estable por elemento (el id de la materia,
nunca el indice).
- Objetivos táctiles de al menos 44x44 puntos. Etiquetas de accesibilidad en
botones e iconos.
- Eliminar siempre pide confirmación con un diálogo del sistema.
- Todos los textos visibles en español.

44 Lista manual de verificacion en Expo Go
- [ ] Se ve bien en vertical y al girar el teléfono.
- [ ] El teclado no tapa el campo ni el boton que se está usando.
- [ ] La nota se escribe con el separador que ofrece el telefono y se comporta como dice la spec.
- [ ] Cerrar la app por completo y abrirla conserva los datos.
- [ ] Los textos de estado se leen sin depender del color.