const string = '2023'
let stringToNumber = parseInt(string)
console.log(stringToNumber) // @ returns 2023

stringToNumber = parseFloat(string)
console.log(stringToNumber) // @ returns 2023

const number = 2023
let numberToString = number.toString()
console.log(numberToString) // @ returns "2023"

numberToString = '' + number
console.log(numberToString) // @ returns "2023"
