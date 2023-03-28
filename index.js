function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
//adding stub function that perform all the operations
function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
Add your pseudocode here
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
  
*/

/*
  Add written explanation of your solution here
  We've cleaned our isPalindrome() function to just return true or false based on the 
  result of our comparison 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
