var start = 2;
var end = 10;
var interval = 2;

printRange (start, end, interval);
console.log ("");
console.log ("No interval");
printRange (start, end);
console.log ("");
console.log ("only range");
printRange(4);


function printRange (start1, end1, interval1)
{

  if (interval1 == null)
  {
    interval1 = 1;
  }

  if (end1 == null)
  {
    end1 = start1;
    start1 = 0;
  }


  if (start1 > end1)
  {
    while (start1 > end1)
    {
      console.log (start1);
      start1 -= interval1;
    }
  }
  else
  {
    while (start1 < end1)
    {
      console.log (start1);
      start1 += interval1;

    }
  }
}
