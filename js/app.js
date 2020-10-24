'use strict';

 console.log('This file is connected and ready to run');
 var userName;
 
 userNamevalidation(); 
 
 function userNamevalidation() 
 {
    userName = prompt("Please enter your name:");
    
    if (userName == null || userName == "") 
    {
      alert("You must enter your name in the prompt box!");
      userNamevalidation();
    } else if (!/^[a-zA-Z]+$/.test(userName)) 
    {
      alert("Please only enter letters");
      userNamevalidation();
    } else 
    {
      alert("Your Name was accepted");
    }
  }


 var field;
while(true){
    var dish = prompt("What do you like? (Veg, WhiteMeat, RedMeat, or Seafood )");

    dish=dish.toLowerCase ();
    
    if(!dish || /^(veg|whitemeat|redmeat|seafood)$/.test(dish))
    {
        field =  ("veg|whitemeat|redmeat|seafood".split("|").indexOf(dish)+1);
        break;
    }
    else
    {
        alert("Please enter a valid item");
    }
}



let recipes = confirm ( 'Are you looking for Indian Recipes ?');

alert ( 'Thank you for your confirmation');

var favcolor = prompt ('Enter your favorite color');

alert ('The background color is set to ' + favcolor);

var smiles = prompt('How many smiles do you want?');

for (var i=0; i<smiles; i++ )
{
    var img = document.createElement("img");
    img.src = "Images/smiley.jpg";
    img.width = 50;
    img.height = 50;
    img.alt = "Rating";
    var src = document.getElementById("rate").appendChild (img);
    
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18) 
{
    greeting = 'Good Evening! ';
} 
else if (hourNow >= 12) 
{
    greeting = 'Good Afternoon! ';
} 
else if (hourNow >= 0) 
{
    greeting = 'Good Morning! ';
} 
else 
{
    greeting = 'Welcome!';
}

function adduserName()
{
    var at = document.getElementById('greeting-placeholder');
    at.textContent = greeting + userName;
}

function dishItem()
{
    var ts = document.getElementById('favorite');
     ts.innerHTML = ' Great! You Like ' + dish;
}

function showCounter()
{
    var td = document.getElementById('counter');
     td.innerHTML = 'Counter - ' + smiles;
}


document.body.style.backgroundColor = favcolor;

adduserName();
dishItem();
showCounter();
