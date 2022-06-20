function isPalindrome(word) {
  // Write your algorithm here


  for (let i=0; i<word.length/2; i++){
    const j = word.length -1-i
    if (word[i] !== word[j]) return false
    }
return true;
}
/* 
  Add your pseudocode here
*/
// iterate from the start of the word to the middle
// check each letter to the corresponding letter
// if any letter don\`t match return false


/*
  Add written explanation of your solution here
*/

// the code first iterates through from the beggining of the word to the middle
// using a for loop and dividing it by half. Then the code checks each lettter
// to the corresponding letter from the end of the word. if any of the letter
// doesn\`t match it returns false, if it matches all the way through the middle
// it returns false

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
