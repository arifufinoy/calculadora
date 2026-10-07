import { describe, expect, it } from '@jest/globals';

import { createMateria, normalizeNota, validateNombre } from './materia';

describe('validateNombre', () => {
  it.each([
    ['Matemáticas', true],
    ['Matemáticas 2', true],
    ['   ', false],
    ['', false],
    ['\t\n', false],
  ])('valida el nombre %p', (nombre, expected) => {
    expect(validateNombre(nombre)).toEqual(
      expected
        ? { valid: true }
        : { valid: false, message: 'Escribe el nombre de la materia.' },
    );
  });
});

describe('normalizeNota', () => {
  it.each(['0', '0.0', '0.00', '9.5', '20', '20.00', '  7.25  '])(
    'acepta la nota %p y la convierte en número',
    (nota) => {
      expect(normalizeNota(nota)).toEqual({ valid: true, value: Number(nota.trim()) });
    },
  );

  it.each([
    '',
    '   ',
    '-0.01',
    '20.01',
    '1.234',
    '1.2.3',
    '1e1',
    '1,5',
    '1.5.',
    '.5',
  ])('rechaza la nota %p', (nota) => {
    expect(normalizeNota(nota)).toEqual({
      valid: false,
      message: 'Escribe una nota entre 0 y 20 con hasta dos decimales.',
    });
  });
});

describe('createMateria', () => {
  it('crea una materia con el nombre y la nota numéricos normalizados', () => {
    expect(createMateria('  Matemáticas  ', '  9.50  ')).toEqual({
      valid: true,
      value: { nombre: 'Matemáticas', nota: 9.5 },
    });
  });

  it.each([
    ['', '9.5', 'Escribe el nombre de la materia.'],
    ['   ', '9.5', 'Escribe el nombre de la materia.'],
    ['Matemáticas', '', 'Escribe una nota entre 0 y 20 con hasta dos decimales.'],
    ['Matemáticas', '20.01', 'Escribe una nota entre 0 y 20 con hasta dos decimales.'],
  ])(
    'no crea una materia cuando los datos son inválidos: %p, %p',
    (nombre, nota, message) => {
      expect(createMateria(nombre, nota)).toEqual({ valid: false, message });
    },
  );
});
