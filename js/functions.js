(function () {
	'use strict';

	var showHide = document.querySelector('.link-menu'),
			body = document.querySelector('body');

	function showSidebar () {
		if (body.className.match(/show-sidebar/g)) {
			body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
		}
	}

	showHide.addEventListener('click', showSidebar);

}());