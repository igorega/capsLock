import { MIN_WIDTH_XL } from '@js/const/media';

const parallax = document.querySelectorAll('.parallax');

if (parallax.length > 0) {
	const parallaxBlock = document.querySelector('.js-parallax');

	// simple parallax func
	const parallaxAnim = (e) => {
		let w = window.innerWidth;
		let h = window.innerHeight;

		let offsetX = 0.5 - e.pageX / w;
		let offsetY = 0.5 - e.pageY / h;

		parallax.forEach(el => {
			let offset = parseInt(el.getAttribute('data-offset'));

			let translate = `translate3d(${Math.round(offsetX * offset)}px, ${Math.round(offsetY * offset)}px, 0`;

			el.style.transform = translate;
		});
	};

	// resize function
	const detectMediaQuery = () => {
		if (MIN_WIDTH_XL.matches) {
			parallaxBlock.addEventListener('mousemove', parallaxAnim);
		} else {
			parallaxBlock.removeEventListener('mousemove', parallaxAnim);
		}
	};

	detectMediaQuery();

	MIN_WIDTH_XL.addEventListener('change', detectMediaQuery);
}
