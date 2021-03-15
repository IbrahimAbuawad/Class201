'use strict';

let userName = prompt('What is your name ?');
alert('welcome to my webpage ' + userName);
console.log('your name is ' + userName);

// this is COFFEE Question .................................................................

let coffee = prompt('Do you like coffee ?');

if(coffee.toLowerCase() === 'yes'||coffee.toLowerCase() === 'no'){
  if(coffee.toLowerCase()==='yes') {

    console.log('We have the best Coffee in jordan');
    alert('We have the best Coffee in jordan');
  }
  else if(coffee.toLowerCase()==='no') {
    alert('We will give you tea instead of coffee');
  }

}

else{
  coffee = prompt('Do you like coffee (yes/no) ?');
}

// this is TRAVEL Question ................................................................

let travel = prompt('Do you like to travel ?');
console.log(travel);
if(travel.toLowerCase() === 'yes'||travel.toLowerCase() === 'no'){
  switch (travel.toLowerCase()) {
  case 'yes':
    console.log('Good choice i think thats why you came here');
    alert('Good choice i think thats why you came here');
    break;
  case 'no':
    alert('Alright we will give another service');
    break;
  }
}
else{
  travel = prompt('Do you like to travel (yes/no) ?');
}
// this is EXPENSIVE Question ..............................................................

let expensiveTravel = prompt('DO you thing traveling expensive for you?');

if(expensiveTravel.toLowerCase() === 'yes'||expensiveTravel.toLowerCase() === 'no'){
  switch (expensiveTravel.toLowerCase()) {
  case 'yes':
    console.log('its ok we will give you discount for this');
    alert('its ok we will give you discount for this');
    break;
  case 'no':
    alert('Perfect so you are traveling person');
    break;
  }
}
else{
  expensiveTravel = prompt('DO you thing traveling expensive for you (yes/no) ?');
}
// this is AGE Question .....................................................................

let married = prompt('Are you married ?');

if(married.toLowerCase() === 'yes'||married.toLowerCase() === 'no'){
  switch (married.toLowerCase()) {
  case 'yes':
    console.log('Good we will sugest to you romance places to go with you partner');
    alert('Good we will sugest to you romance places to go with you partner');
    break;
  case 'no':
    alert('its ok you will traveling with some people as group');
    break;
  }
}
else{
  married = prompt('Are you married (yes/no) ?');
}
// this is RATE Question ....................................................................

let pageRate = prompt('Do you want to give "5/5" rating this page ? ');

if(pageRate.toLowerCase() === 'yes'||pageRate.toLowerCase() === 'no'){
  switch (pageRate.toLowerCase()) {
  case 'yes':
    console.log('Your are AWESOME');
    alert('Your are AWESOME');
    break;
  case 'no':
    alert('We hope someday give us 5 star');
    break;
  }
}
else{
  pageRate = prompt('Do you want to give "5/5" rating this page (yes/no) ?');
}
