# js-markov

This is a fork of js-markov.
It is still a work in progress.

**ts-markov** is a JavaScript library that allows you to create powerful, yet simple Markov Chains.

## Introduction

- **What are Markov Chains?**

  > A Markov chain is a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event. - [Wikipedia](https://en.wikipedia.org/wiki/Markov_chain).

## Installation

TODO

## Usage

## Code Example

The following example shows the basic usage js-markov:

```typescript
// Create a new Markov Chain
// By default, its type is text
var markov = new Markov();

// Add some states
markov.addStates([
  'Today is sunny',
  'Today is rainy',
  'The weather is sunny',
  'The weather for today is sunny',
  'The weather for tomorrow might be rainy'
]);

// Train the Markov Chain
markov.train();

// Generate an output
markov.generateRandom();
```

## Contributing

TODO

## License


ts-markov is licensed under the MIT License.
Please have a look at the [LICENSE file](LICENSE) for more information.
