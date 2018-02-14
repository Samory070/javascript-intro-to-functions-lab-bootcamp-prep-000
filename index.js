let shout = function(string) {
  return string.toUpperCase()
}
shout('hello')

let whisper = function(string) {
  return string.toLowerCase()
}
whisper('HELLO')

let logShout = function(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

let logWhisper = function(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')


var lowercase = 'hello!'
var uppercase = "HELLO!"
var mixedCase = 'Hi there!'


let sayHiToGrandma = function(string) {
  if(lowercase.toLowerCase() === lowercase) {
    return "I can\'t hear you!"
  } else if (uppercase.toUpperCase() === uppercase) {
    return 'YES INDEED'
  }
}
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
