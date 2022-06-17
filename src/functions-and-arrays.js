// Iteration #1: Find the maximum

let result1 = maxOfTwoNumbers(14, 50)
let result2 = maxOfTwoNumbers(78, 12) 
console.log(result1, result2)

function maxOfTwoNumbers(a , b) {
  if (a > b) {
    return a 
  } else if (b > a ) {
    return b
  }
}

// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let result3 = findLongestWord(words) ;
console.log(result3) ;

function findLongestWord(lista) {
  let wordsCount = []
  lista.forEach(word => {
    return wordsCount.push(word.length)
  }); 
  let Index = wordsCount.indexOf(Math.max.apply(null, wordsCount))
  
  return words[Index]

}


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let result4 = sumNumbers(numbers)
console.log(result4)

function sumNumbers(arr) {
  
  let total = arr.reduce((currentTotal, number) => {
    return number + currentTotal
  });
  return total
}


