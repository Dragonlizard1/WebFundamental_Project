
function Birthday ()
{
  var daysUntilMyBirthday = 60;
  var longtime = "days until my birthday. Such a long time... :(";
  var untilbday = "days until my birthday. Counting down yeaaaa.";
  var nearbday = "days until MY BIRTHDAY!!! BIRTHDAY COMING AND BETTER GIVE A GOOD GIFT!!!";
  var birthday1 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  var birthday2 = "xxHAPPY BRITHDAY HAPPY BIRTHDAY TO MExx";

  while (daysUntilMyBirthday >= 0)
  {
    if (daysUntilMyBirthday >= 30)
    {
      console.log (daysUntilMyBirthday, longtime);
    }
    else if (daysUntilMyBirthday == 0)
    {
      console.log (birthday1);
      console.log (birthday2);
      console.log (birthday1);
    }
    else if (daysUntilMyBirthday <= 5)
    {
      console.log (daysUntilMyBirthday, nearbday);
    }
    else if (daysUntilMyBirthday < 30)
    {
      console.log (daysUntilMyBirthday, untilbday);
    }

    daysUntilMyBirthday--;

  }


}

Birthday();


