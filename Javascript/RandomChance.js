var coins = x = Math.floor (Math.random() * 100);

console.log (coins + " coins deposit in Las Vegas Slot.");
console.log ("Play!!!");
slot1 (coins);

function winning()
{
    var x = 0;

    while ((x <= 50) || (x >= 100))
    {
        x = Math.floor (Math.random() * 100);
    }
    return (x);
}

function slot1(coin)
{
    var win = Math.floor (Math.random() * 100);;
    var guess = 0;
    var winningcoin = 0;
    while (coin >0)
    {
        x = Math.floor (Math.random() * 100);         
       if (win == x)
       {
           winningcoin = winning();
           console.log ("You Won!!! " + winningcoin + " coins you won. Now you have total: " + (coin + winningcoin) + " coins.");
           return;
       }
        coin--;
    }
    console.log ("You have lost all: " + coin + " left" );
    console.log ("Thank You for playing Las Vegas Slot.");
}





