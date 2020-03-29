// Плавный скролл
$(document).ready(function () {
	let scroll = new SmoothScroll('a[href*="#section-1"]', {
		speed: 500,
		speedAsDuration: true
	});

	let scroll2 = new SmoothScroll('a[href*="#section-2"]', {
		speed: 500,
		speedAsDuration: true
	});

	let scroll3 = new SmoothScroll('a[href*="#section-3"]', {
		speed: 500,
		speedAsDuration: true
	});
});