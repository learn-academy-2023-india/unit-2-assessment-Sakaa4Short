// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: The terminal will print strings around the individual characters
// b) Verify and explain: Two strings were printed "India" and "2023". The .split built in method divides the the string into substrings and returns them in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: There is no return so the terminal will give no answer.
// b) Verify and explain: The terminal printed undefined. Without the return placed on line 20 before `Hello, ${name}!` there is no way for the function to work properly.


// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The terminal will print only the odd numbers
// b) Verify and explain: The terminal printed the odd numbers only. The onlyOdds is a function is programmed with the bang operater and modulo indicating that what will be printed will include things that do not have a remainder of 0

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: The terminal should print off "JavaScript"
// b) Verify and explain: The terminal printed JavaScript. The myCodingSkills object has the targeted the languages key(symbol) with dot notation and with the [0] index being identified within the console.log. That is the Javascript string on line 39.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The terminal should print "George" "India" 2023
// b) Verify and explain: The terminal printed Learn { student: 'George', cohort: 'India', year: 2023 }. The class Learn had a constructor with the value of name. That means that the string of "George" on line 58 is the variable that is necesarry for input (especially since the rest of the class has defined values on the other 2 keys) thus the terminal printed what it did.
