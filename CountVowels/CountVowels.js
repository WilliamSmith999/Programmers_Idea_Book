const readline = require('readline');

const readlineObject = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

readlineObject.question('Enter a word: ', (word) => {
	const vowelCount = countVowels(word);
	console.log(`"${word}" has ${vowelCount}`);
	readlineObject.close();
});

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  // Convert the word to lowercase for case-insensitive matching
  const lowercaseWord = word.toLowerCase();

  for (let i = 0; i < lowercaseWord.length; i++) {
    if (vowels.includes(lowercaseWord[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

