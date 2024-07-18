import {getRandomInteger} from './util.js';

const SIMILAR_PHOTO_COUNT = 25;
const similarPhotos = [];

const DESCRIPTION = [
  'Ты, похоже, ушел в себя… и кстати, неплохо затусил.',
  'Да пребудет с тобой сила!',
  'Да, ты сегодня – милашка!',
  'Вызывай экзорциста. Уже пора!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
];

const NAMES = [
  'Артем',
  'Виктор',
  'Иван',
  'Мария'
];

const createPhotos = (arrPhotos, countPhotos) => {
  for (let i = 1; i <= countPhotos; i++) {
    arrPhotos.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
        likes: getRandomInteger(15,200),
        comments: {
          id: i,
          avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
          message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
          name:  NAMES[getRandomInteger(0, NAMES.length - 1)],
        },
      });
  }
  return arrPhotos;
};

createPhotos(similarPhotos, SIMILAR_PHOTO_COUNT);

export {createPhotos};
