/*
 * Reto 21
 * si es palindromo
 */

const esPalindromo = function (pm_word1, pm_word2) {
  let palindromo = "";

  for (let i = pm_word1.length; i > 0; i--) {
    palindromo += pm_word1[i - 1];
  }

  if (palindromo === pm_word2) {
    return console.log("Es palindromo");
  } else {
    return console.log("No es palindromo");
  }

}

// True
esPalindromo("hola", "aloh");
esPalindromo("abc", "cba");
esPalindromo("cinema", "amenic");
esPalindromo("abc", "cba");
esPalindromo("aa", "aa");
esPalindromo("amor", "roma");
// False
console.log()
esPalindromo("hola", "alsoh");
esPalindromo("hello", "world");
esPalindromo("heart", "earth");
esPalindromo("apple", "papel");
esPalindromo("car", "race");
esPalindromo("hello", "hello");
esPalindromo("apple", "apple");
esPalindromo("world", "world"); 