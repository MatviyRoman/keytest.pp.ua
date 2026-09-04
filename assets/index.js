// KeyTest — Vanilla JS (no jQuery)
(function () {
  'use strict';

  // Key code → display name map
  var keyNames = {
    27: 'Esc', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4',
    116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9',
    121: 'F10', 122: 'F11', 123: 'F12',
    145: 'Scr Lk', 19: 'Pause break',
    45: 'ins', 46: 'del', 36: 'Home', 35: 'End',
    33: 'Page up', 34: 'Page down',
    192: '~', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5',
    54: '6', 55: '7', 56: '8', 57: '9', 48: '0',
    189: '-_', 173: '-_', 187: '=+', 61: '=+',
    8: 'Backspace', 9: 'Tab',
    144: 'Num Lock', 111: 'num /', 106: 'num *', 109: 'num -',
    103: 'num 7', 104: 'num 8', 105: 'num 9', 107: 'num +',
    100: 'num 4', 101: 'num 5', 102: 'num 6',
    97: 'num 1', 98: 'num 2', 99: 'num 3',
    96: 'num 0', 110: 'num .',
    81: 'Q', 87: 'W', 69: 'E', 82: 'R', 84: 'T', 89: 'Y',
    85: 'U', 73: 'I', 79: 'O', 80: 'P',
    219: '[{', 221: ']}', 220: '|\\',
    20: 'Caps Lock',
    65: 'A', 83: 'S', 68: 'D', 70: 'F', 71: 'G', 72: 'H',
    74: 'J', 75: 'K', 76: 'L',
    59: ';:', 186: ';:', 222: '\'"',
    13: 'Enter',
    16: 'Shift', 17: 'CTRL', 18: 'ALT', 91: 'WIN', 93: 'menu',
    32: 'Space',
    90: 'Z', 88: 'X', 67: 'C', 86: 'V', 66: 'B', 78: 'N', 77: 'M',
    188: ',<', 190: '.>', 191: '/?',
    38: '\u2191', 40: '\u2193', 37: '\u2190', 39: '\u2192',
    44: 'Prt Sc',
    // mouse buttons
    0: 'Left Click', 1: 'Scroll Click', 2: 'Right Click'
  };

  var keybordTop = document.querySelector('.keybord-top');

  function getEls(code) {
    return document.querySelectorAll('.k' + code);
  }

  function keyshow(name) {
    if (!name || !keybordTop) return;
    var p = document.createElement('p');
    p.innerHTML = '<<span>' + name + '</span>>';
    keybordTop.insertBefore(p, keybordTop.firstChild);
  }

  function pressKey(code) {
    var els = getEls(code);
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('active');
      els[i].classList.add('press');
    }
  }

  function releaseKey(code) {
    var els = getEls(code);
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('press');
      els[i].classList.add('active');
    }
    keyshow(keyNames[code]);
  }

  // Keyboard events
  document.addEventListener('keydown', function (e) {
    e.preventDefault();
    pressKey(e.keyCode);
  });

  document.addEventListener('keyup', function (e) {
    e.preventDefault();
    releaseKey(e.keyCode);
  });

  // Mouse events
  // released guard: ensures releaseKey fires exactly once per press,
  // regardless of which event (mouseup / auxclick / contextmenu) arrives first
  var released = {};

  function tryRelease(button) {
    if (!released[button]) {
      released[button] = true;
      releaseKey(button);
    }
  }

  document.addEventListener('mousedown', function (e) {
    e.preventDefault();
    released[e.button] = false;
    pressKey(e.button);
  });

  document.addEventListener('mouseup', function (e) {
    e.preventDefault();
    tryRelease(e.button);
  });

  // Right-click: contextmenu fires before/instead of mouseup in some browsers
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    tryRelease(2);
  });

  // auxclick = non-primary button full-click event (middle + right)
  // fires reliably even when mouseup is swallowed
  // NOTE: not supported in Safari — degrades gracefully
  document.addEventListener('auxclick', function (e) {
    e.preventDefault();
    tryRelease(e.button);
  });

  // Copyright integrity check (converted from jQuery)
  // Checks for non-existent hrefs (intentional) → always triggers → ensures copyright is visible
  function qLen(selector) {
    return document.querySelectorAll(selector).length;
  }
  function isVisible(selector) {
    var el = document.querySelector(selector);
    if (!el) return false;
    var style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
  }

  var o = qLen('.copyright a[href$="https://apartner.pro1"]') &&
          qLen('.copyright a[href$="https://programist.top1"]');
  var r = isVisible('.copyright a[href$="https://apartner.pro1"]') &&
          isVisible('.copyright a[href$="https://programist.top1"]');

  if (o == 0 || r == false) {
    console.log(444);
    var section = document.createElement('section');
    section.className = 'copyright bg-light pt-3 pb-3';
    section.innerHTML =
      '<div class="container"><div class="row justify-content-center"><div class="col-auto">' +
      'Веб-сайт створено компанією <a href="https://apartner.pro" target="_blank" rel="follow" ' +
      'title="Розробка сайту на cms Wordpress/ Prestashop / Laravel php framework">APARTNER.PRO</a>' +
      ' | <a href="https://programist.top" target="_blank" rel="follow" ' +
      'title="Розробка сайту на cms Wordpress/ Prestashop / Laravel php framework">PROGRAMIST.TOP</a>' +
      '</div></div></div>';
    var footer = document.querySelector('footer');
    if (footer) footer.appendChild(section);
  }

})();
