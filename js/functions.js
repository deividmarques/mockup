var project = project || {};

project.functions = (function() {
	'use strict';

	function init(){
		heightSidebar();
	}

	var showHide = document.querySelector('.link-menu'),
	body = document.querySelector('body');

	function heightSidebar(){
		var heightBody = document.body.clientHeight;
		var el = document.querySelector('.sidebar')
		el.style.height = heightBody + 'px' ;
	}

	function showSidebar(){
		if (body.className.match(/show-sidebar/g)) {
			body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
		}
	}

	showHide.addEventListener('click', showSidebar);

	return {
		init: init
	}

}());
window.onload = project.functions.init();

