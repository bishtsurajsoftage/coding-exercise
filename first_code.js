function isPalindrome(str){
  // remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

 // Compare the cleaned string with its reverse
 const reversedStr = cleanStr.split('').reverse().join('');

 // check if the original and reversed strings are the same
 return cleanStr === reversedStr;
}

// example usage
const testString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(testString);

console.log(result ? `${testString} is a palindrome.` : `${testString} is not a palindrome.`);
