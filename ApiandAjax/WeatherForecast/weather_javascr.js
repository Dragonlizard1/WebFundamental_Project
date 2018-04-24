

$(document).ready(function() 
{
    $('form').submit(function() 
    {
      var city1 = $("#user_city").val();
        $.get("https://api.openweathermap.org/data/2.5/weather?q=" + city1 + ",us&&APPID=8dd1a234a19ba5a45678160be2aefb5b", function(res) 
        {
            var tempF= parseInt((res.main.temp * (9/5)) - 459.67);
            
            $("h1").html(city1 + " today temperature is " + tempF + " Fahrenheit");

        }, "json");
       
    return false;
    });
});

