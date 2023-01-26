import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savePlayerTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-percent', percent);
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(savePlayerTime, 1000));

const getStoragedTime = () => {
  const defaultTime = 0;
  try {
    const vidPercent = localStorage.getItem('videoplayer-current-percent');
    const storagedTime = localStorage.getItem('videoplayer-current-time');
    if (!vidPercent || vidPercent > 0.98) return defaultTime;
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
