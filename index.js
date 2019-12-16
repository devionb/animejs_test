/*anime ({
  targets: 'div.block.red',
  translateX: 250,
  rotate: '1turn',
  duration: 800
});
*/

var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 800 },
    { value: 0, duration: 800}
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  },
  opacity: '0.4',
  delay: function(el, i, l){ return i * 1000},
  autoplay: false
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
document.querySelector('#boxes .reset').onclick = playPause.restart;