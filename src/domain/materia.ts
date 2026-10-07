export type ValidationResult =
  | { valid: true }
  | { valid: false; message: string };

export type Materia = {
  nombre: string;
  nota: number;
};

export type MateriaResult =
  | { valid: true; value: Materia }
  | { valid: false; message: string };

const NOTA_INVALID_MESSAGE =
  'Escribe una nota entre 0 y 20 con hasta dos decimales.';

export function validateNombre(nombre: string): ValidationResult {
  const normalizedNombre = nombre.trim();

  if (normalizedNombre.length === 0) {
    return { valid: false, message: 'Escribe el nombre de la materia.' };
  }

  return { valid: true };
}

export function normalizeNota(nota: string):
  | { valid: true; value: number }
  | { valid: false; message: string } {
  const normalizedNota = nota.trim();
  const notaDecimal = /^(?:0(?:\.\d{1,2})?|(?:[1-9]\d*)(?:\.\d{1,2})?)$/.test(
    normalizedNota,
  );
  const value = Number(normalizedNota);

  if (!notaDecimal || !Number.isFinite(value) || value < 0 || value > 20) {
    return { valid: false, message: NOTA_INVALID_MESSAGE };
  }

  return { valid: true, value };
}

export function createMateria(nombre: string, nota: string): MateriaResult {
  const nombreValidation = validateNombre(nombre);
  if (!nombreValidation.valid) {
    return nombreValidation;
  }

  const notaValidation = normalizeNota(nota);
  if (!notaValidation.valid) {
    return notaValidation;
  }

  return {
    valid: true,
    value: {
      nombre: nombre.trim(),
      nota: notaValidation.value,
    },
  };
}
