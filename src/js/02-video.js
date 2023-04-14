import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const inframe = document.querySelector('#vimeo-player');
const player = new Vimeo(inframe);
const localeKey = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(localeKey, JSON.stringify(data.seconds));
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
