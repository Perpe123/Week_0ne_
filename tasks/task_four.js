const numbers = [100, 200, 300, 400, 500]
const result = numbers
console.log(result[0]) // @ returns the number at index 0

result.push(600)
console.log(result) // @ adds a number to the end of the array

result.pop()
console.log(result) // @ removes the last number from the array

result.shift()
console.log(result) // @ removes the first number from the array

result.unshift(100)
console.log(result) // @ adds a number to the beginning of the array
