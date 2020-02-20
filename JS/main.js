var morphing = anime({
  targets: '.blackRectBigPath',
  points: [
    { value: '722 7 0 0 218 214 836 74 722 7' },
    { value: '0 243 244 0 695 452 452 695 0 243' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
});

var position = anime({
  targets: '.blackRectBig',
  top:['265.03px','35.7px'],
  left:['245.8px','407.34px'],
  width:[840.37,697.97],
  height:[213.02,700.39],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})

let blackRectBigPlay =
document.querySelector('.blackRectBigPath')

blackRectBigPlay.onclick = morphing.play

let blackRectBigPlayPos =
document.querySelector('.blackRectBig')

blackRectBigPlayPos.onclick = position.play


var morphing = anime({
  targets: '.redCircle',
  width:[422,81],
  height:[422,81],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
    autoplay: false,
});

var position = anime({
  top:['112px','408px'],
  left:['793px','327px'],
  width:[422,81],
  height:[422,81],
  targets: '.redCircle',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  backgroundColor: '#303A93',
  autoplay: false,
})

let redCirclePlay =
document.querySelector('.redCircle')

redCirclePlay.onclick = morphing.play

let redCirclePlayPos =
document.querySelector('.redCircle')

redCirclePlayPos.onclick = position.play


var morphing = anime({
  targets: '.blackRectMedPath',
  points: [
    { value: '0 103 232 0 246 27 9 118 0 103' },
    { value: '7 0 0 8 705 636 713 628 7 0' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
});

var position = anime({
  width:[245,599],
  height:[120,542],
  top:['141px','191px'],
  left:['1102px','891px'],
  targets: '.blackRectMed',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})


let blackRectMedPathPlay =
document.querySelector('.blackRectMedPath')

blackRectMedPathPlay.onclick = morphing.play

let blackRectMedPlayPos =
document.querySelector('.blackRectMed')

blackRectMedPlayPos.onclick = position.play


var morphing = anime({
  targets: '.yellowRectPath',
  points: [
    { value: '0 103 232 0 246 27 9 118 0 103' },
    { value: '0 31 32 0 342 309 310 341 0 31' },
  ],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  fill: '#CA3636',
  autoplay: false,
});

var position = anime({
  width:[732,53.98],
  height:[424,444.64],
  top:['380px','536.21px'],
  left:['400px','503.65px'],
  targets: '.yellowRect',
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})

let yellowRectPathPlay =
document.querySelector('.yellowRectPath')

yellowRectPathPlay.onclick = morphing.play

let yellowRectPos =
document.querySelector('.yellowRect')

yellowRectPos.onclick = position.play


var morphing = anime({
  targets: '.blackRectLitPath',
  points: [
    { value: '4 31 0 42 125 13 119 0 4 31' },
    { value: '0 672 154 737 506 53 346 0 0 672' },
  ],
  width:[127.42,692.62],
  height:[42.42,800],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  fill: '#303A93',
  autoplay: false,
});

var position = anime({
  targets: '.blackRectLit',
  width:[127.42,692.62],
  height:[42.42,800],
  top: ['248.04px','3px'],
  left:['1163px','533px'],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})

let blackRectLitPathPlay =
document.querySelector('.blackRectLitPath')

blackRectLitPathPlay.onclick = morphing.play

let blackRectLitPos =
document.querySelector('.blackRectLit')

blackRectLitPos.onclick = position.play


var position = anime({
  targets: '.blackLineHor',
  rotate:[0,-18],
  top:['360px','693.77px'],
  left:['236.61px','1000px'],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})

let blackLineHorPos =
document.querySelector('.blackLineHor')

blackLineHorPos.onclick = position.play


var position = anime({
  targets: '.redLine',
  rotate:[0,-18],
  top:['660.8px','524.35px'],
  left:['112.4px','1401.14px'],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  loop: false,
  autoplay: false,
})

let redLinePos =
document.querySelector('.redLine')

redLinePos.onclick = position.play

var position = anime({
  targets: '.blackLineVer',
  top:['600.8px','534.35px'],
  left:['162.4px','1401.14px'],
  width:[803,289],
  height:[736,248],
  easing: 'easeInOutQuad'	,
  duration: 4000,
  direction: 'normal',
  fill: '#F4CD41' ,
  loop: false,
  autoplay: false,
})

let blackLineVerPos =
document.querySelector('.blackLineVer')

blackLineVerPos.onclick = position.play
