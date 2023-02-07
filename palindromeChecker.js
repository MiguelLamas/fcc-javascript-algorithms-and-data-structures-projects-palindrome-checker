/*

Project 1 - Palindrome Checker:

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A33a2, 2A3 3a2, and 2_A33#A2.

PLAN
1. Split string, then reverse and join("") back together in reverse.
2. Add a conditional If Statement, if reversed string is equal to new amended string, return TRUE, else return FALSE.
3. Create a Regex to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into lowercase.
4. Use the Regex pattern with another method called Replace(). Get all non-alphanumeric characters, and replace with nothing (remove them);
5. 
*/

function palindrome(str) {
    let regEx = /[\W_]/g;
    let newStr = str.toLowerCase().replace(regEx, "");
    let reversedStr = newStr.split("").reverse().join("");
    
    if (reversedStr === newStr) return true;
    return false;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));

