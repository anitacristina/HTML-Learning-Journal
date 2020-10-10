'use strict';

 console.log('This file is connected and ready to run');

//var marqueName; 
 var userName = prompt('Please enter your first name');

 alert ('Hello, ' + userName + ' Click  OK to continue');

var hourNow = prompt ('Enter the time in hours:');

let recipes = confirm ( 'Are you looking for Indian Recipes ?');

alert ( 'Thank you for your confirmation');

// variable declaration for greeting
var greeting;

if (hourNow >= 0 && hourNow < 7)
{
   greeting = 'Good Morning ' + userName;
}
else if (hourNow >=7 && hourNow < 12)
{
   greeting= 'Good Mid Day ' + userName;
}
else if (hourNow >=12 && hourNow < 18) 
{
    greeting = 'Good Afternoon ' + userName;
    
}
else if (hourNow >=18 && hourNow <=24)
{
    greeting = 'Good Evening ' + userName;

}

else 
{
   'Have a Great Day!!';
}

document.write ('<h1 style = "color: BLUE ">'+ greeting + '</h1>');
var header = document.getElementById ('removeThis');
header.remove();



