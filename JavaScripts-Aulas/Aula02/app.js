console.log('Gustavo Rodrigues de Lima')

const email = 'rlgustavo@gmail.com'

console.log(email)

const fistName = 'Keizy'
const lastName = 'Mendes'
const fullName = fistName + ' ' + lastName

console.log(fullName)
console.log(fullName[0])

console.log(fullName.length)

console.log(fullName.lastIndexOf('e'))

console.log(fullName.toUpperCase())

const nomeLowerCase = fullName.toLowerCase()

console.log(nomeLowerCase)

const melhorNome = fullName.slice(0,5)


console.log(melhorNome)


const emailReplace = email.replace('gustavo', 'galileu')

console.log(emailReplace)
console.log(email)

console.log(`ola mundo meu nome é ${fullName}` )
