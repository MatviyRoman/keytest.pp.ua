$(document).ready(function() {
	$(document).on('keydown', function(event) {
		event.preventDefault();
		var key = event.keyCode;
		$('.k'+key).removeClass('active');
		$('.k'+key).addClass('press');
		//keyshow(list(key));
	});

	$(document).on('keyup press', function(event) {
		event.preventDefault();
		var key = event.keyCode;
		$('.k'+key).removeClass('press');
		$('.k'+key).addClass('active');
		keyshow(list(key));
		console.log(key);
	});

	$(document).on('mousedown', function(event) {
		event.preventDefault();
		var key = event.button;
		$('.k'+key).removeClass('active');
		$('.k'+key).addClass('press');
		//keyshow(list(key));
	});

	$(document).on('mouseup', function(event) {
		event.preventDefault();
		var key = event.button;
		$('.k'+key).removeClass('press');
		$('.k'+key).addClass('active');
		keyshow(list(key));
	});

	$(document).bind("contextmenu",function(e){
    	return false;
  	});

    $('.quest-block a').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var c = $(this).attr('class');
        $.ajax({
            url: 'opros.php',
            type: 'post',
            data: "param="+c,
        })
        .done(function() {
            console.log("success");
            $(".quest-block").fadeOut(0);
        })
        .fail(function() {
            console.log("error");
        })
    });
});

function keyshow(z) {
	var str = '<p><<span>'+z+'</span>></p> ';
	$('.keybord-top').prepend(str);
}

function list(a) {
 	switch (a) {
    	case 27: return 'Esc'; break;
    	case 112: return 'F1'; break;
    	case 113: return 'F2'; break;
    	case 114: return 'F3'; break;
    	case 115: return 'F4'; break;
    	case 116: return 'F5'; break;
    	case 117: return 'F6'; break;
    	case 118: return 'F7'; break;
    	case 119: return 'F8'; break;
    	case 120: return 'F9'; break;
    	case 121: return 'F10'; break;
    	case 122: return 'F11'; break;
    	case 123: return 'F12'; break;
    	case 145: return 'Scr Lk'; break;
    	case 19: return 'Pause break'; break;
    	case 45: return 'ins'; break;
    	case 46: return 'del'; break;
    	case 36: return 'Home'; break;
    	case 35: return 'End'; break;
    	case 33: return 'Page up'; break;
    	case 34: return 'Page down'; break;
    	case 192: return '~'; break;
    	case 49: return '1'; break;
    	case 50: return '2'; break;
    	case 51: return '3'; break;
    	case 52: return '4'; break;
    	case 53: return '5'; break;
    	case 54: return '6'; break;
    	case 55: return '7'; break;
    	case 56: return '8'; break;
    	case 57: return '9'; break;
    	case 48: return '0'; break;
    	case 189: return '-_'; break;
    	case 173: return '-_'; break;
    	case 187: return '=+'; break;
    	case 61: return '=+'; break;
    	case 8: return 'Backspace'; break;
    	case 144: return 'Num Lock'; break;
    	case 111: return 'num /'; break;
    	case 106: return 'num *'; break;
    	case 109: return 'num -'; break;
    	case 9: return 'Tab'; break;
    	case 81: return 'Q'; break;
    	case 87: return 'W'; break;
    	case 69: return 'E'; break;
    	case 82: return 'R'; break;
    	case 84: return 'T'; break;
    	case 89: return 'Y'; break;
    	case 85: return 'U'; break;
    	case 73: return 'I'; break;
    	case 79: return 'O'; break;
    	case 80: return 'P'; break;
    	case 219: return '[{'; break;
    	case 221: return ']}'; break;
    	case 220: return '|\\'; break;
    	case 103: return 'num 7'; break;
    	case 104: return 'num 8'; break;
    	case 105: return 'num 9'; break;
    	case 107: return 'num +'; break;
    	case 20: return 'Caps Lock'; break;
    	case 65: return 'A'; break;
    	case 83: return 'S'; break;
   		case 68: return 'D'; break;
   		case 70: return 'F'; break;
   		case 71: return 'G'; break;
   		case 72: return 'H'; break;
   		case 74: return 'J'; break;
   		case 75: return 'K'; break;
   		case 76: return 'L'; break;
   		case 59: return ';:'; break;
   		case 186: return ';:'; break;
   		case 222: return '\'"'; break;
   		case 100: return 'num 4'; break;
   		case 101: return 'num 5'; break;
   		case 102: return 'num 6'; break;
   		case 90: return 'Z'; break;
   		case 88: return 'X'; break;
   		case 67: return 'C'; break;
   		case 86: return 'V'; break;
   		case 66: return 'B'; break;
   		case 78: return 'N'; break;
   		case 77: return 'M'; break;
   		case 188: return ',<'; break;
   		case 190: return '.>'; break;
   		case 191: return '/?'; break;
   		case 96: return 'num 0'; break;
   		case 32: return 'Space'; break;
   		case 93: return 'menu'; break;
   		case 38: return '\u2191'; break;
   		case 40: return '\u2193'; break;
   		case 37: return '\u2190'; break;
   		case 39: return '\u2192'; break;
   		case 110: return 'num .'; break;
   		case 97: return 'num 1'; break;
   		case 98: return 'num 2'; break;
   		case 99: return 'num 3'; break;
   		case 0: return 'Left Click'; break;
   		case 1: return 'Scroll Click'; break;
   		case 2: return 'Right Click'; break;
   		case 16: return 'Shift'; break;
   		case 18: return 'ALT'; break;
   		case 17: return 'CTRL'; break;
   		case 91: return 'WIN'; break;
   		case 13: return 'Enter'; break;
   		case 44: return 'Prt Sc'; break;
	}
}