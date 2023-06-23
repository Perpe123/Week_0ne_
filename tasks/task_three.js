const isTrue = true
const isFalse = false

let result = isTrue && isFalse
console.log(result) // @ returns false

result = isTrue || isFalse
console.log(result) // @ returns true

result = !isTrue && isFalse
console.log(result) // @ returns false

result = isTrue && !isFalse
console.log(result) // @ returns true

result = !isTrue || isFalse
console.log(result) // @ returns false

result = isTrue || !isFalse
console.log(result) // @ returns true

result = !(isTrue && isFalse)
console.log(result) // @ returns true

result = !(isTrue || isFalse)
console.log(result) // @ returns false

if (isTrue && isFalse) {
  console.log('Both isTrue and isFalse are true')
} else if (isTrue || isFalse) {
  console.log('Either isTrue or isFalse is true') // @ returns "Either isTrue or isFalse is true"
} else {
  console.log('Neither isTrue nor isFalse is true')
}
