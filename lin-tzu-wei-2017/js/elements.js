export default [
  { url: 'images/baseball-field.png', left: 0, top: 0, width: 600, height: 484, class: 'field', scale: 500 / 484, container: 'gamingScene' },
  { url: 'images/baseball.png', left: 0, top: 0, bottom: 305, width: 50, height: 50, vx: 0, vy: 2.5, class: 'ball', scale: 0.5, container: 'gamingScene' },
  { url: 'images/baseball-hat.png', left: 0, top: 0, bottom: 305, width: 60, height: 46, class: 'pitcher', scale: 0.7, container: 'gamingScene' },
  { url: 'images/go.png', left: 0, top: 0, bottom: 165, width: 100, height: 99, class: 'go-bang', scale: 0.7, active: false, container: 'gamingScene' },
  { url: 'images/hat1.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 0.63, vy: -0.63, class: 'runner', scale: 0.7, role: 'bot', active: false, tag: 'bill', container: 'gamingScene' },
  { url: 'images/hat2.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 0.58, vy: -0.58, class: 'runner', scale: 0.7, role: 'bot', active: false, tag: 'lin', container: 'gamingScene' },
  // { url: 'images/hat3.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 1, vy: -1, class: 'runner', scale: 0.7, role: 'bot', active: false, tag: 'lin', container: 'gamingScene' },
  { url: 'images/hat5.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 0.497 , vy: -0.497, class: 'runner', scale: 0.7, role: 'bot', active: false, tag: 'normal', container: 'gamingScene' },
  { url: 'images/hat6.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 0.61, vy: -0.61, class: 'runner', scale: 0.7, role: 'bot', active: false, tag: 'ichiro', container: 'gamingScene' },
  { url: 'images/hat4.png', left: 0, top: 390, bottom: 150, width: 60, height: 48, vx: 3.9, vy: -3.9, class: 'runner', scale: 0.7, role: 'player', active: true, tag: 'you', container: 'gamingScene' },
  { url: 'images/you-win.png', left: 0, top: 0, bottom: 0, width: 600, height: 498, class: 'win', scale: 500 / 498, active: false, container: 'gameOverScene' },
  { url: 'images/good-game.png', left: 0, top: 0, bottom: 0, width: 600, height: 498, class: 'lose', scale: 500 / 498, active: false, container: 'gameOverScene' },
  { url: 'images/bg.png', left: 0, top: 0, bottom: 0, width: 600, height: 600, class: 'menu', scale: 500 / 600, active: true, container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/you.png', left: 0, top: 0, bottom: 560, right: 56, width: 380, height: 70, class: 'menu-runner', scale: 1, active: true, container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Tzu-Wei-Lin.png', left: 0, top: 0, bottom: 440, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'normal', tag: 'lin', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Billy-Hamilton.png', left: 0, top: 0, bottom: 350, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'normal', tag: 'bill', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Ichiro-Suzuki.png', left: 0, top: 0, bottom: 260, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'normal', tag: 'ichiro', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Normal-Player.png', left: 0, top: 0, bottom: 170, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'normal', tag: 'normal', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Tzu-Wei-Lin2.png', left: 0, top: 0, bottom: 440, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'selected', tag: 'lin', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Billy-Hamilton2.png', left: 0, top: 0, bottom: 350, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'selected', tag: 'bill', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Ichiro-Suzuki2.png', left: 0, top: 0, bottom: 260, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'selected', tag: 'ichiro', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/Normal-Player2.png', left: 0, top: 0, bottom: 170, right: 56, width: 380, height: 70, class: 'menu-runner', type: 'option', scale: 1, active: true, style: 'selected', tag: 'normal', container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/play.png', left: 0, top: 0, bottom: 45, right: 56, width: 293, height: 29, class: 'menu-play', scale: 1, active: true, container: 'gameMenuScene', scaleBase: 600 },
  { url: 'images/play-again.png', left: 0, top: 0, bottom: 82, right: 0, width: 293, height: 29, class: 'gameset-play-again', scale: 1, active: true, container: 'gameOverScene', scaleBase: 600 },
  { url: 'images/share.png', left: 0, top: 0, bottom: 47, right: 0, width: 293, height: 29, class: 'gameset-share', scale: 1, active: true, container: 'gameOverScene', scaleBase: 600 },
  { url: 'images/button.png', left: 0, top: 0, bottom: 0, right: 0, width: 140, height: 140, class: 'button', scale: 1, active: true, container: 'gamingScene', scaleBase: 600 },
  { url: 'images/button2.png', left: 0, top: 0, bottom: 0, right: 0, width: 140, height: 140, class: 'button', scale: 1, active: true, container: 'gamingScene', scaleBase: 600 },
  { url: 'images/fingr.png', left: 0, top: 0, bottom: 0, right: 0, width: 106, height: 184, class: 'finger', scale: 1, active: true, container: 'instructionRunContainer', scaleBase: 1000 },
]