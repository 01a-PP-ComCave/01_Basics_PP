/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 *
 */

/*** 02. Theorie: Array */

let arr;
//arr = new Array();  // Konstruktor
arr = []; // so geht auch
arr = [2, 11, 7, 8, 10];

output(arr);
output(arr.length); // gibt die Anzahl an Worten
output(arr[0]); // Index 0 (1 Pos. im Array)
output(arr[arr.length - 1]);

/**
 *   PRAXIS
 *
 */

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence('Ich', 'bin', 'Max', 'Mütze'));
// output(getSentence('Ich', 'bin', 'die', 'coole', 'Maxine', 'Mützerich'));

function getSentence(word1, word2, word3, word4) {
  const GAP = ' ';
  const PUNCT = '.';
  let str = word1 + GAP + word2 + GAP + word3 + GAP + word4 + PUNCT;

  return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi");
function output(outputStr) {
  console.log(outputStr);
}
