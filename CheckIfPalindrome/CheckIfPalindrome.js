function isPalindrome(word) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const formattedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the formatted word with its reversed version
  return formattedWord === formattedWord.split('').reverse().join('');
}
const word = 'level';
console.log(isPalindrome(word));
