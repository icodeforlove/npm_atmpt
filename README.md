# atmpt [![Build Status](https://travis-ci.org/icodeforlove/npm_atmpt.png?branch=master)](https://travis-ci.org/icodeforlove/npm_atmpt)

provides an easy way to make promises retry based on exceptions

## install

```
npm install atmpt
```

## options

- delay (can be a number or function that returns a number, if its a function it gets called with an attempt argument)
- maxAttempts (the maximum amount of attempts)

## examples

heres a basic retry example

```javascript
await atmpt(async attempt => {
	/* logic */
});
```

and heres a little more advanced example with validation and custom delays

```javascript
await atmpt(async attempt => {
	/* logic */
}, {maxAttempts: 10, delay: attempt => attempt * 1000});
```
