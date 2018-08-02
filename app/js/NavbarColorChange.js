$(document).ready(function ()
{
	// Fires when a new Navbar li item becomes activated.
	$(".navbar").on("activate.bs.scrollspy", function ()
	{
		if ($('.navbar li:first-of-type').hasClass('active'))
		{
			$('.navbar').css('background-color', 'transparent');
		}
		else
		{
			$('.navbar').css('background-color', '#1b1b1b');
		}
	})
});