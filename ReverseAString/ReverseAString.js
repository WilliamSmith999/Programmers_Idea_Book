const readline = require('readline');

const readlineObject = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  return str.split('').reverse().join('');
}

readlineObject.question('Enter a string: ', (string) => {
        const reversedString = reverseString(string);
        console.log(`${reversedString}`);

        readlineObject.close();
});
