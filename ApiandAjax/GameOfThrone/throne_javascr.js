$(document).ready(function()
{
	//loadingimg();

//	function loadingimg()
//	{	
	
//House Stark of Winterfell      362
//House Targaryen of Kind's Landing   378
//House Baratheon of Storm's End    17
//House Lannister of Casterly Rock   229
	//}


	$("img").click(function()
	{	
	
		var find_house;	

		
		find_house = "https://www.anapioficeandfire.com/api/houses/" + $(this).attr("id");
	
		$.get(find_house, function(data1) 
		{
			var house_set = "<h2>Name: " + data1.name + "</h2>";
			house_set += "<p>Words: " + data1.words + "</p>";
			house_set += "<p>Titles: ";

			for (var i = 0; i < data1.titles.length; i++)
			{
				if ((data1.titles.length - 1) != i)
				{
					house_set += data1.titles[i] + ", ";
				}
				else
				{
					house_set += data1.titles[i] + "</p>";
				}
			}
			console.log(house_set);

			$("#house_info").html(house_set);		

		}, "json");
			

			
	

	});



});  //end