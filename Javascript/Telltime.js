var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

var HOUR2 = 7;
var MINUTE2 = 15;
var PERIOD2 = "PM";

console.log ("Tell time 1:")

timefind(HOUR, MINUTE, PERIOD);

console.log ("Tell time 2:")

timefind(HOUR2, MINUTE2, PERIOD2);

function timefind(H1, M1, P1)
{

	if (M1 <= 30)
	{
		if (P1 == "AM")
		{
			console.log ("It's just after",H1,"in the morning");
		}
		else
		{
			console.log ("It's just after",H1,"in the evening");
		}
  else
	{
		if (P1 == "AM")
		{
			console.log ("It's almost",H1,"in the morning");
		}
		else
		{
			console.log ("It's almost",H1,"in the evening");
		}
	}
}