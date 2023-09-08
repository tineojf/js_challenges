/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

let multiplo_3 = 'fizz';
let multiplo_5 = 'buzz'
let multiplo_15 = multiplo_3 + ' ' + multiplo_5;

for (let i = 1; i <= 100; i++) {
  console.log(`${i} - ${i % 15 == 0 ? multiplo_15 : i % 3 == 0 ? multiplo_3 : i % 5 == 0 ? multiplo_5 : ""
    }`)
}