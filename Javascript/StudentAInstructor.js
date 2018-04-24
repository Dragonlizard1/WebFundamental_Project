var pos = 0;


var users = {
  "Students": [ 
      {first_name: "Michael", last_name: "Jordan"},
      {first_name: "John", last_name: "Rosales"},
      {first_name: "Mark", last_name: "Guillen"},
      {first_name: "KB", last_name: "Tonel"}
   ],
  "Instructors": [
      {first_name: "Michael", last_name: "Choi"},
      {first_name: "Martin", last_name: "Puryear"}
   ]
  }

printout1 ();

function printout1 ()
{
  var userFirst;
  var userLast;
  console.log("Students");


  for (var counter = 0; counter < users.Students.length; counter ++)
  {
    userFirst = users.Students[counter].first_name.toUpperCase();
    userLast = users.Students[counter].last_name.toUpperCase();
    console.log((counter+1) + " - " + userFirst + " " + userLast + " " + (userFirst.length + userLast.length) )
  }

  console.log("Instructors");
  for (var counter1 = 0; counter1 < users.Instructors.length; counter1 ++)
  {
    userFirst = users.Instructors[counter1].first_name.toUpperCase();
    userLast = users.Instructors[counter1].last_name.toUpperCase();
    console.log((counter1+1) + " - " + userFirst + " " + userLast + " " + (userFirst.length + userLast.length) )
  }

}