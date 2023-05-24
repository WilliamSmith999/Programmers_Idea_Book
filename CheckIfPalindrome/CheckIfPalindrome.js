const readline = require('readline');

const readlineObject = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function checkPalindrome(word) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const formattedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the formatted word with its reversed version
  return formattedWord === formattedWord.split('').reverse().join('');
}

readlineObject.question('Enter a word: ', (word) => {
	const isPalindrome = checkPalindrome(word);
	console.log(`Is "${word}" a palindrome? ${isPalindrome}`);

	readlineObject.close();
});
