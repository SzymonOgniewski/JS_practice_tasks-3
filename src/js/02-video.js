import Player from '@vimeo/player';
console.log(Player)
 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

 player.on('play', function () {
   console.log('played the video!');
 });

