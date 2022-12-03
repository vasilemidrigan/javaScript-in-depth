"use strict";
//                     =================
//                     Lexical Structure
//                     =================

// The text of JavaScript Program
// -----------------------------

// JS is case sensitive:
const planet = "Earth";

console.log(planet); // => Earth

// console.log(pLaNeT); => ReferenceError: pLaNeT is not defined
// console.log(PLANET); => ReferenceError: PLANET is not defined

// JavaScript recognizes:
// newlines:
console.log("Not the Sharpest Tool\nin the Shed");
// carriage return:
console.log("Not the Sharpest Tool \rin the Shed");
// and carriage return/line feed

// Literals
// -----------------------------

// A literal is a data value that appears directly in the programm:

// Some examples of literals:
1;
("some text");
true;
false;
null;
undefined;
("another text");

// Identifiers and Reserved Words
// -----------------------------

// Identifiers are simple names that are used to name constants,
// variables, functions, properties and classes

/*
Identifier examples:

i;
a_variable;
b456;
_anotherVariable;
$moneyVar;

*/

// There're some rezerved words that we cannot use as identifiers.

// for ex:

/*

function 
const
let 
for
in
new

and many more...

but we can use them as names of the properties of our objects:
*/

const rezervedWordsAsPropertyNames = {
  for: "for",
  const: "const",
  function: "function",
  get: "get",
};

console.log(rezervedWordsAsPropertyNames.function); // => function

// Examples of rezerved words for future implementation:

// function package() {} => Unexpected strict mode reserved word
// let enum = 2; => Unexpected strict mode reserved word
// const protected = 1;  => Unexpected strict mode reserved word

// Unicode
// ---------------------------

// JavaScript uses Unicode character set, and you can use any
// unicode character in strings and comments.

// There's a programming convention to use only ASCII characters
// for portability and easy of editing.

// However we can use Unicode ideographs, letters,
//  digits (but not emoji in identifiers).

// For identifiers we can use math symbols and words for non-english
// languages:

const pilcrow = "¶";
const Æ = 1;
const ë = "lattin smaller E diaeressis";
const Ţ = "tz";

// Unicode escape sequences
// ------------------------

// Because there're old technologies that do not support all set of
// Unicode characters, JavaScript defines escape sequences which
// allow to write Unicode characters using only ASCII characters.

// This Unicode characters begin with \u followed by the 4 hex digits
// (using uppercase or lower case letters A-F) or by 1-6 hex digits
// enclosed in curly braces.

// This Unicode characters may appear in string literals, regular
// expression literals and identifiers.

const reversedƎ = "latin capital letter E reversed";

// Unicode Normalization
// ---------------------

// If we're using a non-ASCII characters, we should be aware because
// Unicode allows more than one way of encoding the same character,
// even if the character is the same, if the encoding differs like bellow,
// the identifiers will point to different location into memory.

// same character - different encoding
const é = "asfas"; //    \u00E9
const é = "asdfsad"; //  \u0301

console.log(é, é);
console.log(é === é); // => false

// If we use Unicode characters in our programs, we should be aware
// and use some tools to perform Unicode normalization to prevent
// different encodings of visually indistinguishable identifiers.

// Optional Semicolons

// - Since here we have two statements that appear on separate lines
// the first semicolon we can omit.

// here's no error:
// const a = 2
// const b = 1;

// - But we should definetlly use semicolon were statements are written
// on the same line, otherwise it will throw an error:
const a = 1;
const v = 2;

// - JavaScript treats a line break as a semicolon only if the next
// non-space character can not be interpreted as a continuation of the
// current statement.

// here's no errors at all, that's because the next non-space character
// is interpreted as a continuation of the current statement.

// let winter
// winter
// =
// "winter"
// console.log(winter);

// - We can use semicolons as a defensive intention in order to
// prevent our code from conflicts with previous written code:

// let foo = [1, 2, 3];
// let z = 34
// ;foo.forEach((el) => console.log(el));

// - The exceptions with line breaks are:
// 1. keywords: return, throw, yield, break. JavaScript will always
// interpret the line break as a semicolon

function sum(x, y) {
  let calcSum = x + y;
  return;
  calcSum;
  // it was probably meant to be > return calcSum;
}

// 2nd exception (arrow sign should be on the same line with arguments): 

// ERROR:
// const gh = (x) 
// => {
//   console.log(x);
// };

// 3rd exception postfix ++ and -- should be on the same line with the
//  expression:

// ERROR
// let foo = a
// ++;
