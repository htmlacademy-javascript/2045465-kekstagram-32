import './miniature.js';
import {getPhotoMiniature} from './miniature.js';
import {createPhotos} from './data.js';
import {SIMILAR_PHOTO_COUNT} from './data.js';
getPhotoMiniature(createPhotos(SIMILAR_PHOTO_COUNT));
