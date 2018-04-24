var xmoney = 10000;
var ymoney = 1000000000;
var zmoney = Infinity;

console.log ("30 days how much money?");
HowMuch();
console.log("");
console.log ("How many days it will take for $10000");
HowManyDays(xmoney);
console.log("");
console.log ("How many days it will take for $1000000000");
HowManyDays(ymoney);
console.log("");
console.log ("How many days it will take for Infinity");
HowManyDays(zmoney);

function HowMuch ()
{
  var solveday = 30;
  var amount = .01;

  for (var i = 2; i <= solveday; i++)
  {
    amount *= 2;
  }
  console.log ("Your reward at " + solveday + " days " + "$" + amount);
}

function HowManyDays (myvalue)
{
  var amount1 = .01;

  for (var day = 2; amount1 <= myvalue; day++)
  {
    amount1 *= 2;

    if (amount1 >= myvalue)
    {
      console.log ("Your reward at " + day + " days " + "$" + amount1);
      break;
    }
    else if (myvalue == Infinity)
    { 
      console.log ("to much to compute . system failure HA HA HA");
      console.log ("How many days for infinity is that you will have plus milion no problem in 30 days.");
      break;
    }
  }

}


