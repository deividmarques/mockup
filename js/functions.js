(function() {

	'use strict';

	var showHide = document.querySelector('.link-menu'),
	body = document.querySelector('body');

	function init() {
		heightSidebar();
	}

	function heightSidebar() {
		var heightBody = document.body.clientHeight;
		var el = document.querySelector('.sidebar');
		el.style.height = heightBody + 'px';
	}

	function showSidebar() {
		if (body.className.match(/show-sidebar/g)) {
			body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
			init();
		}
	}

	showHide.addEventListener('click', showSidebar);

	return {
		init: init
	};

}());