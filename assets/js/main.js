(function () {
	const item = document.querySelectorAll('.desc-item');

	item.forEach(elm => {
		elm.addEventListener('click', function () {
			const unActive = document.querySelector('.desc-item.active');
			unActive && unActive.classList.remove('active');
			this.classList.add('active');
		});
	});
})();
