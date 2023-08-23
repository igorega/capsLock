import { MIN_WIDTH_M, MIN_WIDTH_L } from '@js/const/media';

const header = document.querySelector('.header');

if (header) {

	const body = document.querySelector('body');
	const html = document.querySelector('html');
	const navToggleBtn = document.querySelector('#navToggleBtn');

	// close menu function
	const closeMenu = () => {
		navToggleBtn.setAttribute('aria-expanded', false);
		body.classList.remove('menu-open');
		html.removeAttribute('style');
	};

	// toggle nav menu
	navToggleBtn.addEventListener('click', () => {
		const scrollPadding = `${window.innerWidth - document.documentElement.clientWidth}px`;

		document.documentElement.style.setProperty('--scrollPadding', scrollPadding);

		if (navToggleBtn.getAttribute('aria-expanded') === 'false') {
			navToggleBtn.classList.add('transition');
			navToggleBtn.setAttribute('aria-expanded', true);
			body.classList.add('menu-open');
		} else {
			closeMenu();
		}
	});

	// resize function
	const detectMediaQuery = () => {
		if (MIN_WIDTH_L.matches) {
			body.classList.remove('menu-open');
			navToggleBtn.setAttribute('aria-expanded', false);
			navToggleBtn.classList.remove('transition');
		}
	};

	detectMediaQuery();

	MIN_WIDTH_L.addEventListener('change', detectMediaQuery);

	// get mobile scroll
	const getMobileScroll = () => {
		if (window.scrollY > 10) {
			header.classList.add('is-bg');
		} else {
			header.classList.remove('is-bg');
		}
	};

	// add/remove class to header
	const classToHeader = () => {
		if (MIN_WIDTH_M.matches) {
			header.classList.remove('is-bg');
			window.removeEventListener('scroll', getMobileScroll);
		} else {
			getMobileScroll();
			window.addEventListener('scroll', getMobileScroll);
		}
	};

	classToHeader();

	MIN_WIDTH_M.addEventListener('change', classToHeader);

	// close menu outside
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.header') && !e.target.closest('#navListContent') && body.classList.contains('menu-open')) {
			closeMenu();
		}
	});

	// close menu keyboard
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && body.classList.contains('menu-open')) {
			closeMenu();
		}
	});

}
