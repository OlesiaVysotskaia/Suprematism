var morphing = anime({
  targets: '.blackRectBigPath',
  points: [
    { value: '722 7 0 0 218 214 836 74 722 7' },
    { value: '0 243 244 0 695 452 452 695 0 243' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true
});

var position = anime({
  targets: '.blackRectBig',
  top:['285.03px','65.7px'],
  left:['245.8px','407.34px'],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
})


var morphing = anime({
  targets: '.redCircle',
  width:[422,81],
  height:[422,81],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true
});

var position = anime({
  top:['112px','408px'],
  left:['803px','347px'],
  targets: '.redCircle',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
  backgroundColor: '#303A93'
})


var morphing = anime({
  targets: '.blackRectMedPath',
  points: [
    { value: '0 103 232 0 246 27 9 118 0 103' },
    { value: '7 0 0 8 705 636 713 628 7 0' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true
});

var position = anime({
  width:[245,599],
  height:[120,542],
  top:['161px','211px'],
  left:['1102px','891px'],
  targets: '.blackRectMed',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
})


var morphing = anime({
  targets: '.yellowRectPath',
  points: [
    { value: '0 103 232 0 246 27 9 118 0 103' },
    { value: '0 31 32 0 342 309 310 341 0 31' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
  fill: '#CA3636'
});

var position = anime({
  width:[732,53.98],
  height:[424,444.64],
  top:['400px','556.21px'],
  left:['400px','503.65px'],
  targets: '.yellowRect',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
})


var morphing = anime({
  targets: '.blackRectLitPath',
  points: [
    { value: '4 31 0 42 125 13 119 0 4 31' },
    { value: '0 1037 148 1113 682 76 534 0 0 1037' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
  fill: '#303A93'
});

var position = anime({
  targets: '.blackRectLit',
  width:[127.42,692.62],
  height:[42.42,800],
  top:['248.04px','1px'],
  left:['1163px','533px'],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'alternate',
  loop: true,
})
