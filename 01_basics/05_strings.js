const name="JavaScript"
const repoCount=50


//Old ways to declare
console.log("name"+repoCount+"Value")
//Modern ways
console.log(`Hi, My name is ${name} and my repocount is ${repoCount}`)

const gmail="vikashprogrammer123%20@gmail.com"
//Strings method
console.log(gmail.toUpperCase())
console.log(`my gmail length is ${gmail.length}`)
console.log(gmail.charAt(2)) //fetch character based on index
console.log(gmail.indexOf('v'))
console.log(gmail.__Proto__)
console.log(gmail.replace('%20','-'))

const name1="    Hitesh    "
console.log(`My name is ${name1}`)
console.log(`My name is ${name1.trim()}`)
console.log(gmail.substring(-8,4))
console.log(gmail.slice(-17,4))