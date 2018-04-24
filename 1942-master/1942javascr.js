
var score = 0;

var hero = {
	x: 300,
	y: 500
}
var bullets = [];

var enemies = [{x:50, y:50},{x:200, y:50},{x:500, y:50}];

function displayHero()
{
	document.getElementById("hero").style["top"] = hero.y + "px";
	document.getElementById("hero").style["left"] = hero.x + "px";
}

function displayEnemies()
{
	var output = "";
	for (var i = 0; i < enemies.length; i++)
	{
		output += "<div class='enemy1' style='top:"+ enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>";
	}
	document.getElementById('enemies').innerHTML = output;
}

function displayScore()
{
	document.getElementById('score').innerHTML = score;

}

document.onkeydown = function(pkey)
{

	if (pkey.keyCode == 32)
	{
		bullets.push({x: hero.x+6, y: hero.y-15});
	} else if (pkey.keyCode == 37)
	{
		hero.x -= 10;
	} else if (pkey.keyCode == 39)
	{
		hero.x += 10;
	} else if (pkey.keyCode == 38)
	{
		hero.y -= 10;
	} else if (pkey.keyCode == 40)
	{
		hero.y += 10;
	} 
	displayHero();
}


function displayBullets()
{
	var output = "";
	for (var i = 0; i < bullets.length; i++)
	{
		output += "<div class='bullet' style='top:"+ bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>";

	}

document.getElementById('bullets').innerHTML = output;
}

function moveEnemies()
{
	for (var i = 0; i < enemies.length; i++)
	{
		enemies[i].y += 1;

		if(enemies[i].y > 540)
		{
			enemies[i].y = 0;
			enemies[i].x = parseInt(Math.random() * 1000);
			
		}

	}
}

function moveBullets()
{
	for (var i = 0; i < bullets.length; i++)
	{
		bullets[i].y -= 1;

		if (bullets[i].y < 0 )
		{
			bullets[i] = bullets[bullets.length-1];
			bullets.pop();
		}
		
	}
}

function detectCollision()
{
	for (var i = 0; i < bullets.length; i++)
	{
		for (var j = 0; j < enemies.length; j++)
		{
			if ((Math.abs(bullets[i].x - enemies[j].x) < 15) && ((bullets[i].y - enemies[j].y) < 20))
				{
					//collision codeing
				
					enemies[j].y = 0;
					enemies[j].x = parseInt(Math.random() * 1000);
					
					bullets[i] = bullets[bullets.length-1];
					bullets.pop();
					score+=10;
					
				}
		}
	}
//	console.log(bullets);
}


function gameLoop()
{
	detectCollision();
	displayEnemies();
	displayHero();

	displayBullets();
	displayScore();

	moveEnemies();
	moveBullets();
}

setInterval(gameLoop, 20);


