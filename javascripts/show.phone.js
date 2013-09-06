/**
 * User: Evgeny Reznichenko
 * Date: 06.09.13
 * Project: zxcabs.github.io
 *
 */

(function (window, document) {
	var p = ['7', '962', '708', '68', '72'].join(' ');

	var addEvent = function (el, name, fn) {
		if (window.addEventListener) {
			addEvent = function (el, name, fn) {
				el.addEventListener(name, fn);
			};
		} else {
			addEvent = function (el, name, fn) {
				el.attachEvent('on' + name, fn);
			};
		}

		addEvent(el, name, fn);
	};

	var removeEvent = function (el, name, fn) {
		if (window.removeEventListener) {
			removeEvent = function (el, name, fn) {
				el.removeEventListener(name, fn);
			};
		} else {
			removeEvent = function (el, name, fn) {
				el.detachEvent('on' + name, fn);
			};
		}

		removeEvent(el, name, fn);
	};

	function once(el, name, fn) {
		function f() {
			fn.apply(this, arguments);
			removeEvent(el, name, f);
		}

		addEvent(el, name, f);
	}

	addEvent(window, 'load', function () {
		var el = document.getElementById('mobile');

		once(el, 'click', function (e) {
			e.preventDefault();
			el.innerText = p;
		});
	});
})(window, document);