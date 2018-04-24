$(document).ready(function()
{

	function get_img()
	{
	//	var pokemonfile1 = 
	var pokemonimage;
		for (var i = 1; i < 152; i++)
		{
			pokemonimage = " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
			//var i = 3;
		//	$.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) 
		//	{
			 pokemonimage = "<img src =" + pokemonimage + ">";
		 	$("#test").append(pokemonimage);
		//  console.log(res);
	//	 

	    //   https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png

		//  }, "json");
		
		

	//	console.log(pokemonimage);
	  };

		


	};


	$("button").click(function()
	{
  get_img();
	});



});