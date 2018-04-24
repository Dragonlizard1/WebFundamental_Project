$(document).ready(function()
{


	$("img").click(function()
	{
	$(this).attr("src", "img/placeholder.jpg");
	});

	$("button").click(function()
	{
	$("img").attr("src", "img/ninja1.jpg");
	});


});