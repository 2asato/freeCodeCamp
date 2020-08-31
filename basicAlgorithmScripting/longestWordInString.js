// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let strArray = str.split(" ")
    console.log(strArray);
    // return str.length;
    let lengthArray = [];
    strArray.forEach(string => lengthArray.push(string.length))
    console.log(Math.max(...lengthArray));
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


//   alternate solution
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }