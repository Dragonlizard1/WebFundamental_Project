




$(document).ready(function()
{


	$("#change_button").click(function()
	{
  $("#change_click").text("I'm different")
	});



	$("#hide_button").click(function()
	{
  $("#hiding").hide();
	});

	$("#show_button").click(function()
	{
  $("#showing").show();
	});

	$("#toggle_button").click(function()
	{
  $(".toggling").toggle();
	});


	$("#slidingd_button").click(function()
	{
  $("#box_down").slideDown();
	});

	$("#sliding_up_button").click(function()
	{
  $("#box_up").slideUp();
	});

	$("#sliding_toggle_button").click(function()
	{
  $("#box_toggle").slideToggle();
	});

	$("#fade_button").click(function()
	{
  $("#box_fade").fadeIn("slow");
	});

	$("#fade_out_button").click(function()
	{
  $("#box_fade_out").fadeOut("slow");
	});

	$("#add_class_button").click(function()
	{
  $(".add_class1").addClass("selected highlight");
	});

	$("#before_button").click(function()
	{
  $("#add_me_before").before("<b>I'm Right Here</b>")
	});

	$("#after_button").click(function()
	{
  $("#add_me_after").after("<b>I'm Right Here</b><br>")
	});

	$("#append_button").click(function()
	{
  $("#add_append").append("<b> I'm Right Here</b>")
	});


	$("#html_mod_button").click(function()
	{
  $("#html_mod1").html("<p>I have been modified</p>")
	});

	$("#attr_button").click(function()
	{
  var title = $("#attr_mod1").attr("title");
	$("#booyah").text(title);
	});

	$( "#val_text" ).keyup(function()
	{
    var value = $( this ).val();
    $( "#val_out_text" ).text( value );
  })
  .keyup();

	$("#data_button").click(function()
	{
	  $( "#data_mod1" ).data( "MyData", { hide1: "Booyahhh", hide2: "Are you scared!"} );
		$( "#data1" ).text( $( "#data_mod1" ).data( "MyData" ).hide1 );
		$( "#data2" ).text( $( "#data_mod1" ).data( "MyData" ).hide2 );
	});


});