var navResize = (function() {

	'use strict';



// =================================
// Variables

	var showHide = document.querySelector('.link-menu'),
			body = document.querySelector('body');

	// Function that initializes

	function init() {
		heightSidebar();
	}

	// Screen sizesproject

	function heightSidebar() {
		var heightWindow = window.innerHeight;
		var el = document.querySelector('.sidebar');
		el.style.height = heightWindow + 'px';
	}

	// displays and hides the sidebar

	function showSidebar() {
		if (body.className.match(/show-sidebar/g)) {
			body.classList.remove('show-sidebar');
		} else {
			body.classList.add('show-sidebar');
		}
	}

	// Calls the function to screen size

	window.addEventListener('resize', function(e) {
		e.preventDefault();
		heightSidebar();
	});

	// Adds the event click function to show and escoder sidebar

	showHide.addEventListener('click', showSidebar);

	// Return the initialized

	return {
		init: init
	};

}());

window.onload = navResize.init();
