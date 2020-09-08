// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize 
// connecting words like "the" and "of".

function titleCase(str) {
    // return str;
    let titleCaseSentenceArray = str.toLowerCase().split(" ");
    let firstLetterUpperCased = titleCaseSentenceArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    let finalString = firstLetterUpperCased.join(" ");
    console.log(finalString);
    return finalString
  }
  
  titleCase("I'm a little tea pot");
  