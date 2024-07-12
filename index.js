function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.split('').reverse().join('');

  if(word === newWord){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here
  get string input
  save input to variable. 
  use the split method to break characters into an array
  reverse the split characters then join them again.
  compare the two if they are the same i.e. each character value at an index match.
*/

/*
  Add written explanation of your solution here
  function will receive a string argument. The passed argument will be separated into individual characters 
  using the .split() method and the result will be reversed using the .reversed().
  the reversed result will then be combined again using the .join() method to group the individual characters into a string.
  This will then be comapred to our original passed in argument.
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
