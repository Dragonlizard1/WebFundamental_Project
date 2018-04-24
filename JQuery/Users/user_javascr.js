$(document).ready(function()
{

	$("button").click(function()
	{
		var fname = $("#fname1").val();
		var lname = $("#lname1").val();
		var email = $("#email1").val();
		var contact = $("#contact1").val();
		var markup = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";
	
  $("#data1").append(markup);

	});


});