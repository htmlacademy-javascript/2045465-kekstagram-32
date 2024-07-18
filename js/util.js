function getRandomInteger (min, max) {
  if (max < min) {
    const replacement = min;
    min = max;
    max = replacement;
  }
  if (min < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
}

export {getRandomInteger};
