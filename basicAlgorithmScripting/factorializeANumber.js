// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let numArr = [];
    let factorialized = 0;
    if (num === 0) {
        return 1;
    }
    for (let i = 1; i <= num; i++){
        // console.log(i);
        numArr.push(i);
        // console.log(numArr);
        factorialized = numArr.reduce((a, b) => a * b, 1)
        // console.log(factorialized);
        
    }
    return factorialized
  }
  
  factorialize(5);


//   alternate solutions
// 1
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);

// 2
  function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);

// 3
function factorialize(num, factorial = 1) {
    if (num == 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
  
  factorialize(5);

// 4
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
      new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1)
    );
  }
  factorialize(5);