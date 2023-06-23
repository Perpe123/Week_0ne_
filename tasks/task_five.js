const person = {
  name: 'Pearl',
  age: 12,
  location: 'Texas'
}

console.log(person.name) // @ returns "Pearl"
console.log(person.age) // @ returns 12
console.log(person.location) // @ returns "Texas"

person.gender = 'female'
console.log(person) // @ returns { name: 'Pearl', age: 12, location: 'Texas', gender: 'female' } (added gender)

person.location = 'Washington'
console.log(person) // @ returns { name: 'Pearl', age: 12, location: 'Washington', gender: 'female' } (updated location)
