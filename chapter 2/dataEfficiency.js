/* ========== BOOLEAN ========== */
let isLoggedIn = true;          // variable is true
let gameOver = false;           // variable is false.



/* ========== VARIABLE CAN CHANGE TYPE ========== */
let numDonuts = 12;             // variable is a number
numDonuts = false;              // variable now is boolean type.



/* ========== STRINGS ========== */
let name1 = "John";
typeof(name1)                  // print the type of the variable.
let lastName = "Doe";

name1 + lastName;               // concatenate the strings together = JohnDoe

"hi" + 1;                       // it will concatenate the string to be "hi1" as a string
                                // so the number here is going to be a string.

/* ========== STRINGS ========== */
let randomName = "Chicken";     // Strings are indexed meaning each character has a corresponding index
                                // C = 0 / h = 1 / i = 2 etc...

randomName.length();              // property which will give us the length of the string.
                                // "chicken".length = 7.

                                // To access a single character.
randomName[0];                  // C
randomName[6];                  // n
randomName[1];                  // h


randomName[randomName.length() - 1]       // will access the last character which is 'n'

randomName[0] = "D";                    // String cannot be changed this way


randomName.toUpperCase();               // makes all the character in the string to uppercase letters.
randomName.toLowerCase();               // makes all the character to lower case.
randomName.trim();                      // removes beginning and end spaces.
randomName.trim().toLowerCase();        // methods will go by the order. trim first and then lower case.


randomName.indexOf('ken');              // will get the index of the first occurence of 'ken'
                                        // it is case sensitive.
                                        // if it doesn't find the string then it will return -1.


randomName.slice(4);                    // will remove all characters before index 4.
randomName.slice(4,6);                  // will remove all characters excpet from index 4 to 6.


let randomString = "New chapter";
randomString.replace('New', 'Old');     // will replace New with Old

let randomString2 = "ha ha ha";
randomString2.replace('ha','hee');      // will only replace the very first occurrence of the word ha to hee.



/* ========== ESCAPE CHARACTERS ========== */
// \n   - newline
// \'   - single quote.
// \"   - double quote.
// \\   - backslash
// \t   - tab




/* ========== TEMPLATE LITERALS ========== */
'I counte ${3 + 4} sheep';              // will turn into "I counted 7 sheep"
``                                      // is back-ticks 
                                        // same as single or double quotes.
                                        // if back-tick is used then you will not need to escape single or double quotes.
                                        // we can also embed information.
"${3 + 4}"                              // will not work in normal string. HAS TO BE TICKS.


let animal = "pig";
let sound = "oink";

'${animal} says ${sound}'               // pig says oink.
animal + " " + "says" + " " + sound;    // pig says oink.
'${anima} says ${sound.toUpperCase()}'  // pig says OINK.





/* ========== MATH OBJECT ========== */
Math.PI;                                // 3.14159
Math.round(4.9);                        // 5
Math.abs(-456)                          // 456 makes it absolute value.
Math.pow(2,5)                           // 32 raises to the 5th power.
Math.floor(3.9999)                      // 3 removes the decimal.
Math.random();                          // generates a random number between 0 and 1 but no including 1


//for dice roll example
Math.floor(Math.random() * 6) + 1;      // generates random number from 1 to 6.





/* ========== PARSEINT PARSEFLOOR ========== */
parseInt('24');             // return 24 as an int.
parseInt('24.5345');        // return 24 without the decimal
parseInt('28dayslater');    // return 28 without the rest of the string. but has to be at the beginning of the string.














