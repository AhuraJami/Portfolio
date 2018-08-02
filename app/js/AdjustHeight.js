function SetHeightToWidth(className, offset)
{
	var width = $(className).width();
	$(className).css({ 'height': (width + offset) + 'px' });
}

function SetHeightOfChild(childClassName, parentClassName)
{
	var parentHeight = $(parentClassName).height();
	$(childClassName).css({ 'height': parentHeight + 'px' });

	console.log(parentHeight);


}

SetHeightToWidth('.img-frame', -80);
SetHeightOfChild('.module1', '.module2');
SetHeightOfChild('.module3', '.module2');




$(window).resize(function ()
{
	SetHeightToWidth('.img-frame', -80);
	SetHeightOfChild('.module1', '.module2');
	SetHeightOfChild('.module3', '.module2');
})