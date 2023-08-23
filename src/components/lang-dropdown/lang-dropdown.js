const langDropdown = document.querySelectorAll('.lang-dropdown');

if (langDropdown.length > 0) {

	langDropdown.forEach(item => {
		const btn = item.querySelector('.lang-dropdown__btn');

		btn.addEventListener('click', () => {
			if (btn.parentElement.classList.contains('is-active')) {
				btn.parentElement.classList.remove('is-active');
			} else {
				langDropdown.forEach(el => el.classList.remove('is-active'));
				btn.parentElement.classList.add('is-active');
			}
		});

		// change lang
		const langDropdownList = item.querySelector('.lang-dropdown__list');

		langDropdownList.addEventListener('click', (e) => {

			if (e.target !== langDropdownList) {
				const lang = item.querySelector('.lang-dropdown__selected');

				const selectedLang = lang.textContent;
				const newLang = e.target.textContent;

				lang.textContent = newLang;
				e.target.textContent = selectedLang;

				item.classList.remove('is-active');
			}
		});
	});

	// close lang dropdown outside
	document.addEventListener('click', (e) => {
		langDropdown.forEach(item => {
			if (!e.target.closest('.lang-dropdown') && item.classList.contains('is-active')) {
				item.classList.remove('is-active');
			}
		});
	});

	// close lang dropdown keyboard
	document.addEventListener('keydown', (e) => {
		langDropdown.forEach(item => {
			if (e.code === 'Escape' && item.classList.contains('is-active')) {
				item.classList.remove('is-active');
			}
		});
	});
}
