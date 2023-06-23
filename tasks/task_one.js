const name = 'Toochi'
let result = name
console.log(result) // @ returns "Toochi"

const fullName = 'Toochi ' + 'Obiefuna'
result = fullName
console.log(result) // @ returns 'Toochi Obiefuna'

const uppercaseFullName = fullName.toUpperCase()
result = uppercaseFullName
console.log(result) // @ returns "TOOCHI OBIEFUNA"

const lowercaseFullName = fullName.toLowerCase()
result = lowercaseFullName
console.log(result) // @ returns "toochi obiefuna"

const slicedFullName = fullName.slice(7, 10)
result = slicedFullName
console.log(result) // @ returns "Obi"
