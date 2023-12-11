// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleOrNah", () => {
    it(" decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisibleOrNah(15)).toEqual("15 is divisible by three")
        expect(divisibleOrNah(0)).toEqual("0 is divisible by three")
        expect(divisibleOrNah(-7)).toEqual("-7 is not divisible by three")
    })

})

// // b) Create the function that makes the test pass.

// // Pseudo code:
// // Input: objects with the numbers pre selected.
// // Output: Identification if the numbers are divisible by 3. 
// // Create a test that can return the output that whether or not the objects are divisible by three

const divisibleOrNah = (number) => {
    if (number % 3 === 0 )
    return `${number} is divisible by three`
    else {
        return `${number} is not divisible by three`
    }
  }
  
      
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalLetters") = () => {
    it("return strings with the first letter capitalized", () => {
        expect(capitalLetters(randomNouns1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
        expect(capitalLetters(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango")
    })

}

// b) Create the function that makes the test pass.


// Pseudo code:
// Input: The arrays that have preselected strings
// Output: The arrays that have the first letters added to the 
// Create a function that capitalizes the first letter in each index in the array
// Return an output that capitalizes ONLY the first letter and not the entire word


const capitalLetters = (array) => {
    return array.map((value) => {
      if (typeof value === 'string' || value instanceof String) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      } else {
        return value
      }
    })
}

//This method has failed but I believe it is due to the output not showoing up exacly. One idea would be to place the first letter aside and then capitalize it while recofusing on the rest of the string. I have not  been able to make them work but below are other options Ive tried. 

// const capitalizeLetter = (() => {
// 	const firstChar = str.charAt(0).toUpperCase();
// 	const remainingChars = str.slice(1);
// 	return `${firstChar}${remainingChars}`;
// })();
