(function () {
	'use strict';

	var showHide = document.querySelector('.link-menu'),
			body = document.querySelector('body');

	showHide.addEventListener('click', function () {
		if (body.className.match(/show-sidebar/g)) {
				body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
		}
	});

}());