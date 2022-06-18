function isPalindrome(word) {
 
  const reversedWord = reverseString(word);

  return word === reversedWord;

}

function reverseString(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
*/
// reverse the input string

// if the reversed string is equal to the input
//   return true
// else
//   return false
/*
  Add written explanation of your solution here
  the reverseWord variable reverses the input string and returs a word that is equal to the initial word.
  fucntion reverseString return a reverses word. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
