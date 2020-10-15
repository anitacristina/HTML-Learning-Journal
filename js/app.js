'use strict';

 console.log('This file is connected and ready to run');

//var marqueName; 
 var userName = prompt('Please enter your first name');

 var field;
while(true){
    var dish = prompt("What do you like? (Veg, White Meat, Red Meat, or Seafood )");
    if(!dish || /^(Veg|White Meat|Red Meat|Seafood)$/.test(dish))
    {
        field =  ("Veg|White Meat|Red Meat|Seafood".split("|").indexOf(dish)+1);
        break;
    }else{
        alert("Please enter a valid item");
    }
}



let recipes = confirm ( 'Are you looking for Indian Recipes ?');

alert ( 'Thank you for your confirmation');

var favcolor = prompt ('Enter your favorite color');

alert ('The background color is set to ' + favcolor);


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


document.body.style.backgroundColor = favcolor;

adduserName();
dishItem();
