import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-pleyer');

const throttleUpdate = _.throttle(updateCurrentTime, 1000);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

player.on('play', function () {
  throttleUpdate();
});

player.on('timeupdate', function () {
  throttleUpdate();
});

function updateCurrentTime() {
  const currentTime = player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}
