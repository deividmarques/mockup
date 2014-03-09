var project = {};

project.functions = (function() {

	'use strict';

	var showHide = document.querySelector('.link-menu'),
	body = document.querySelector('body');

	function init() {
		heightSidebar();
	}

	function heightSidebar() {
		var heightWindow = window.innerHeight;
		var el = document.querySelector('.sidebar');
		el.style.height = heightWindow + 'px';
	}

	function showSidebar() {
		if (body.className.match(/show-sidebar/g)) {
			body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
		}
	}

	showHide.addEventListener('click', showSidebar);

	return {
		init: init
	};

}());

window.onload = project.functions.init();