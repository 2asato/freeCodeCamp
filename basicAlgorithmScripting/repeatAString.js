// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let bigString = ""
    while (num > 0) {
        bigString += str;
        num--;
    }
    console.log(bigString);
    
  }
  
  repeatStringNumTimes("abc", 3);