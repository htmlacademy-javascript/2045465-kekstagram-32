const checksLength = function (line, maxlength) {
  const result = line.length <= maxlength;
  return result;
};
checksLength('hello', 10);

const isPalindrome = function (line) {
  const newLine = line.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for(let i = newLine.length - 1; i >= 0; --i){
    newString += newLine[i];
  }

  return newString === newLine;
};

isPalindrome('Лёша на полке клопа нашёл ');

