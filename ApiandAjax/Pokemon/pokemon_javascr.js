


$(document).ready(function()
{

	var pokemonimage;
		for (var i = 1; i < 152; i++)
		{
			pokemonimage = " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
			pokemonimage = "<img src =" + pokemonimage + ">";
		 	$("#test").append(pokemonimage);
	  };
	




});