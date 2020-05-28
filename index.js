
// random number
document.querySelector(".a").addEventListener("click",hey)

var player1=prompt("Please enter player 1's name:");
var player2=prompt("Please enter player 2's name:");

document.querySelector(".pl1").innerHTML=player1;
document.querySelector(".pl2").innerHTML=player2;

function hey()
{
  var randomNumber1 = Math.floor(Math.random()*6+1);
  var randomNumber2 = Math.floor(Math.random()*6+1);

  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1===randomNumber2)
  {
    document.querySelector("h1").innerHTML="It's a draw.";
  }
  else if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML=player1+" wins";
  }
  else
  {
    document.querySelector("h1").innerHTML=player2+" wins";
  }

}
