var isPlaying = false;
var isFirstTime = true;

$(document).ready(function () {
	var iframe = document.querySelector('iframe');
	var player = new Vimeo.Player(iframe);

	var videoWrapper = $('.video-wrap');

	// On clicking the .action-play buton
	$('.action-play').click(function (event) {
		if (isFirstTime) {
			isFirstTime = false;
			player.play();
		}

		videoWrapper.show();
		videoWrapper.addClass('expand');
		videoWrapper.css('z-index', '6');

		// Slide the window to video frame
		$('html, body').animate({
			scrollTop: $('.video-frame').offset().top
		}, 900);
	});

	// play the video when the css animation of expanding the video frame finished
	videoWrapper.bind('webkitAnimationEnd oanimationend msAnimationEnd animationEnd', function () {
		if ($(".expand")[0]) {
			isPlaying = true;

			// Bring the frame div on top so that video buttons become clickable.
			videoWrapper.css('pointer-events', 'auto');

			// Hide the navigation bar
			// $('.navbar').css('display', 'none');

			// Auto play the video
			if (!isFirstTime)
				player.play();
		}
	});

	// close windows and re-activate play button (by letting CSS run animation again)
	$(window).scroll(function () {
		if (isPlaying) {
			var pos = videoWrapper.offset().top;

			var winTop = $(window).scrollTop();
			var offset = 75;

			if (pos < (winTop - offset) | pos > (winTop + offset)) {
				isPlaying = false;

				videoWrapper.removeClass('expand');
				// $('.navbar').css('display', 'initial');

				videoWrapper.css('pointer-events', 'none');
				videoWrapper.css('z-index', '-10');

				player.pause();
				// $('html, body').animate({ scrollTop: $('.video-frame').offset().top }, 2000);
			}
		}
	});

	player.on('ended', function () {
		console.log('The video has finished playing.');
	})
});