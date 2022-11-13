import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savePlayerTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(savePlayerTime, 1000));

const getStoragedTime = () => {
  const defaultTime = 0;
  try {
    const storagedTime = localStorage.getItem('videoplayer-current-time');
    if (!storagedTime) return defaultTime;
    const parsedTime = JSON.parse(storagedTime);
    return Number(parsedTime);
  } catch (error) {
    return defaultTime;
  }
};

const continueWatching = () => {
  const lastPlayedTime = getStoragedTime();
  player.setCurrentTime(lastPlayedTime);
};
continueWatching();
