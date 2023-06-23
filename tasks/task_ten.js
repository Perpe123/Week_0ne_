const name = 'Ben'
const password = 'abcd123'
const laptop = 'Dell'
const requiredLaptop = 'Apple'

console.log('Name:', name) // @ returns "Name: Ben"

if (laptop !== requiredLaptop) {
  console.warn('warning: must be Apple laptop') // @ returns "warning: must be Apple laptop"
}
if (password.length < 8) {
  console.error('error: password is too short') // @ returns "error: password is too short"
}
