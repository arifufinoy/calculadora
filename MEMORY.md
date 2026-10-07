# MEMORY.md - Calculadora de Supletorio
Estado del trabajo entre sesiones. Maximo ~50 líneas.

## Estado actual
- Se completaron las decisiones de HU-001 en specs/001-registrar-materia/decisiones.md.
- Las decisiones cubren rango y formato de la nota, validación del nombre, repetición de materias, almacenamiento local y confirmación de eliminación.
- Se creó la especificación activa specs/001-registrar-materia/spec.md para HU-001.
- Se resolvieron las dudas abiertas de mensajes, ubicación de avisos y validación de la nota en la spec activa.
- Se creó el plan specs/001-registrar-materia/plan.md y las tareas specs/001-registrar-materia/tasks.md.
- Se completó T1 con funciones puras para validar nombre, nota y creación de materia.
- Las pruebas de T1 cubren los casos límite de validación y creación; 27 pruebas pasan.
- El typecheck finaliza sin errores. El lint queda bloqueado porque el proyecto no tiene una configuración ESLint.

## Próximos pasos.
- Ejecutar T2 de specs/001-registrar-materia/tasks.md para implementar repetición de materias y su creación de materia.