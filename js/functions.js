const checksLength = function (line, maxlength) {
  let result = line.length <= maxlength;
  return result
}


const isPalindrome = function (line) {
  let newLine = line.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for(let i=newLine.length - 1; i>=0; --i){
    newString += newLine[i];
  }

    return newString === newLine;
}

isPalindrome('Лёша на полке клопа нашёл ');
