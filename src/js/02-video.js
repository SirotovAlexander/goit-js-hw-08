import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const inframe = document.querySelector('#vimeo-player');
const player = new Vimeo(inframe);
const localStorage = 'videoplayer-current-time';
player.on('play', onPlay);

function onPlay(data) {
  console.log(data.seconds);
}
