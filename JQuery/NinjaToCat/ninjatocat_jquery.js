$(document).ready(function()
{


	$("img").click(function()
	{
  var catpic = $(this).attr("alt");
	$(this).attr("src", catpic);
	});



});