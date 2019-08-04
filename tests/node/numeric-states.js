const Markov = require('../../src/markov')

const numericData = [
  { state: 1, predictions: [2, 3] },
  { state: 2, predictions: [3, 1] },
  { state: 3, predictions: [2, 1] }
]

const markov = new Markov('numeric')

markov.addStates(numericData)

markov.train()

console.log(markov.generateRandom(100))
console.log(markov.predict(1))
console.log(markov.predict(2))
console.log(markov.predict(3))
console.log(markov.predict(4)) // Will give an error
