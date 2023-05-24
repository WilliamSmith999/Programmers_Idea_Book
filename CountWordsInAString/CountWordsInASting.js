const readline = require('readline');

const readlineObject = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function countWords(sentence) {
  // Remove leading and trailing whitespace
  const trimmedSentence = sentence.trim();

  // Split the sentence into an array of words
  const words = trimmedSentence.split(' ');

  // Filter out any empty words
  const filteredWords = words.filter(word => word !== '');

  // Return the count of filtered words
  return filteredWords.length;
}

readlineObject.question('Enter a word: ', (sentence) => {
	const wordCount = countWords(sentence);
	console.log(`The sentence has ${wordCount} words`);

	readlineObject.close();
});

