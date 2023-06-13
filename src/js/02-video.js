import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

function getStoredCurrentTime() {
  return parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
}

function storeCurrentTime(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const playerElement = document.getElementById('vimeo-player');
const player = new Player(playerElement, {
  id: 236203659,
  width: 640,
  height: 360,
});

player.setCurrentTime(getStoredCurrentTime());

player.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;
    storeCurrentTime(currentTime);
  }, 1000)
);
