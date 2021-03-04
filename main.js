/******************
 * YOUR CODE HERE *
 ******************/

function xify (str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    newStr += 'x';
  }
  return newStr;
}

function yellingChars (str){
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    newStr += str[i] + '!';
  }
  return newStr;
}

function indexedChars (str){
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    newStr += i.toString() + str[i];
  }
  return newStr;
}

function numberedChars (str) {
  let newStr = "";
  for(let i = 0; i < str.length; i ++){
    newStr += "(" + (i + 1).toString() + ")" + str[i];
  }
  return newStr;
}

function exclaim (str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] !== '?' && str[i] !== '.'){
      newStr += str[i];
    }else{
      newStr += '!';
    }
  }
  return newStr;
}

function repeatIt (str, num) {
  let newStr = "";
  for(let i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}

function truncate (str) {

  if(str.length < 18){
    return str;
  }

  let newStr = "";

  for(let i = 0; i < 15; i++){
    newStr += str[i];
  }

  return newStr += '...';
}

function ciEmailify (str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      newStr += '.';
    }else if(i === str.length - 1){
      newStr += str[i] + '@codeimmersives.com';
    }else{
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function reverse (str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

function onlyVowels (str) {
  let newStr = "";
  const vowels = 'aeiouAEIOU';
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        newStr += str[i];
      }
    }
  }
  return newStr;
}

function crazyCase (str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(i % 2 !== 0){
      newStr += str[i].toUpperCase();
    }else{
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function titleCase (str) { 
  let newStr = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++){
    if(str[i] === ' '){
      newStr += ' ' + str[i + 1].toUpperCase()
      i++;
    }else{
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function camelCase(str) {
  let newStr = str[0].toLowerCase();
  for(let i = 1; i < str.length; i++){
    if(str[i] !== ' '){
      newStr += str[i].toLowerCase();
    }else{
      newStr += str[i + 1].toUpperCase();
      i++;
    }
  }
  return newStr;
}

function crazyCase2ReturnOfCrazyCase (str) {
  let newStr = str[0].toLowerCase();
  let count = 1;
  for(let i = 1; i < str.length; i++){
    if(str[i] !== ' '){
      if(count % 2 !== 0){
        newStr += str[i].toUpperCase();
        count++;
      }else{
        newStr += str[i].toLowerCase();
        count++;
      }
    }else{
      newStr += str[i];
    }
  }
  return newStr;
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
