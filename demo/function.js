// function say(word) {
//   console.log(word)
// }

// function execute(someFunction, word) {
//   someFunction(word)
// }
// execute(say, 'hello')

function execute(someFunction, value) {
  someFunction(value)
}

execute(function (word) {
  console.log(word)
}, "Hello")