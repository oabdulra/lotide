# Lighthouse Labs Lotide Project

 This project is based on the [Lodash](https://lodash.com/) library and is essentially a reimagined version of the Lodash library, in a simpler format.

 ## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @oabdulra/lotide`

**Require it:**

`const _ = require('@oabdulra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

 
 Below is a list of functions and what they do :

 * `countLetters`: counts the amount of letters in a string

 * `countOnly`: Looks through an object and counts how many instances of a property appear

 * `eqArrays`: compares 2 arrays to see if they are equal

 * `eqObjects`: compares 2 objects to see if they are equal

 * `findKey`: looks through an object with a property and returns that property's key

 * `findKeyByValue`: looks through an object by searching for the value and returning the key

 * `flatten`: turns a multdimensional array into a flat, 1 dimensional array

 * `head`: finds and returns the head of an array

 * `index`: list of all functions in the lotide library, can be exported 

 * `letterPositions`: given a letter, it returns the position(s) of said letter in a string

 * `map`: maps and returns the start of strings , etc

 * `middle`: returns the middle of a given array

 * `tail`: returns the end or tail of a given array

 * `takeUntil`: Takes in an array and a point to stop, and returns a new array with everything until the stop point

 * `without`: takes in an array and removes elements not needed, and returns a new array with elements removed

 * `assertEqual`: Checks to see if 2 passthroughs are equal

 * `assertArraysEqual`: Check to see if 2 array are equal

 * `assertObjectsEqual`: Checks to see if 2 objects are the same
