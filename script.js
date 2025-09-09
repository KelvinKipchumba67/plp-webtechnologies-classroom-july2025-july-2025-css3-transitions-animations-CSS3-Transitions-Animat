
// Carousel logic
document.addEventListener('DOMContentLoaded', function() {
	const images = document.querySelectorAll('.carousel-image');
	let current = 0;

	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
		});
	}

	function nextImage() {
		current = (current + 1) % images.length;
		showImage(current);
	}

	showImage(current);
	setInterval(nextImage, 3000); // Change image every 3 seconds

	// Spinner control
	const btn = document.querySelector('.btn');
	const spinner = document.querySelector('.spinner');
	if (btn && spinner) {
		btn.addEventListener('click', function() {
			spinner.classList.add('spinning');
		});
	}
});
