var newArray = [1, "apple", -3, "orange", 0.5];

adjustArray();
console.log(newArray);

function adjustArray()
{
    for (var i = newArray.length - 1; i >= 0 ; i--)
    {
        if (typeof newArray[i] !== "number")
        {    
            for (var x = i; x < newArray.length; x++)
            {
                if ((newArray.length - 1) ==  x)
                {
                    newArray.pop();
                }
                else 
                {
                    newArray[x] = newArray[x + 1];
                }
            }
        }
    }
}