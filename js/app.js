'use strict';
let correctResult = 0;

let guessArray = [2, 4, 6, 8, 10];

let userName = prompt('What is your name ?');
alert('welcome to my webpage ' + userName);



function quesFun() {
  let coffee = prompt('Do you like coffee ( Yes / No ) ?');
  while (coffee.toLowerCase() !== 'yes' && coffee.toLowerCase() !== 'no') {
    coffee = prompt('Do you like coffee ( Yes / No ) ?');
  }

  if (coffee.toLowerCase() === 'yes') {

    alert('We have the best Coffee in jordan');
    correctResult = correctResult + 1;
  }
  else if (coffee.toLowerCase() === 'no') {
    alert('We will give you tea instead of coffee');
  }
}
quesFun();





function travelQues() {
  let travel = prompt('Do you like to travel ( Yes / No ) ?');
  while (travel.toLowerCase() !== 'yes' && travel.toLowerCase() !== 'no') {
    travel = prompt('Do you like to travel ( Yes / No ) ?');
  }

  switch (travel.toLowerCase()) {
  case 'yes':
    alert('Good choice i think thats why you came here');
    correctResult = correctResult + 1;
    break;
  case 'no':
    alert('Alright we will give another service');
    break;
  }
}
travelQues();




function expTravel() {
  let expensiveTravel = prompt('DO you thing traveling expensive for you ( Yes / No ) ?');
  while (expensiveTravel.toLowerCase() !== 'yes' && expensiveTravel.toLowerCase() !== 'no') {
    expensiveTravel = prompt('DO you thing traveling expensive for you ( Yes / No ) ?');
  }
  switch (expensiveTravel.toLowerCase()) {
  case 'yes':
    alert('its ok we will give you discount for this');
    correctResult = correctResult + 1;
    break;
  case 'no':
    alert('Perfect so you are traveling person');
    break;
  }
}
expTravel();




function marriedQues() {
  let married = prompt('Are you married ( Yes / No ) ?');
  while (married.toLowerCase() !== 'yes' && married.toLowerCase() !== 'no') {
    married = prompt('Are you married ( Yes / No ) ?');
  }


  switch (married.toLowerCase()) {
  case 'yes':
    alert('Good we will sugest to you romance places to go with you partner');
    correctResult = correctResult + 1;
    break;
  case 'no':
    alert('its ok you will traveling with some people as group');
    break;
  }
}
marriedQues();




function pageQues() {
  let pageRate = prompt('Do you want to give "5/5" rating this page ? ( Yes / No ) ');
  while (pageRate.toLowerCase() !== 'yes' && pageRate.toLowerCase() !== 'no') {
    pageRate = prompt('Do you want to give "5/5" rating this page ? ( Yes / No ) ');
  }

  switch (pageRate.toLowerCase()) {
  case 'yes':
    alert('Your are AWESOME');
    correctResult = correctResult + 1;
    break;
  case 'no':
    alert('We hope someday give us 5 star');
    break;
  }
}
pageQues();




function guessQues() {
  let guessNumber;

  let correctNum = 5;
  let i;
  let attempt = 1;


  for (i = 0; i < 4; i++) {
    guessNumber = prompt('This is attempt number ' + attempt + ' Guess the right number between 1 to 10 ?');
    if (Number(guessNumber) === correctNum) {
      alert('PERFECT your answer is Correct " its 5 " ');
      correctResult = correctResult + 1;
      break;
    }
    else if (Number(guessNumber) > correctNum) {
      alert('"Too high" try again');
      attempt += 1;


    }
    else if (Number(guessNumber) < correctNum && Number(guessNumber) !== -1) {
      alert('"Too low" try again');
      attempt += 1;


    }
    else {
      alert('"its not a number" try again');
      attempt += 1;

    }
    if (attempt === 5) {
      alert('SORRY You did not guess the number " Correct answer is 5 "');
    }
  }
}
guessQues();




function numbQues() {
  let guessMultipleNumber;
  let a;
  let attemptQ7 = 1;
  let arrayIndex = 0;
  for (a = 0; a < 6; a++) {
    if (guessArray[arrayIndex] === Number(guessMultipleNumber)) {
      break;
    }
    arrayIndex = 0;
    guessMultipleNumber = prompt('Q7 >>> This is attempt number ' + attemptQ7 + ' Guess one of the right " multiple numbers " between 1 to 10 ?');

    while ((guessArray.length - 1) > arrayIndex) {
      if (guessArray[arrayIndex] === Number(guessMultipleNumber)) {
        alert('your answer is correct ' + guessArray[arrayIndex] + ' is correct answer');
        correctResult = correctResult + 1;
        break;
      }
      arrayIndex = arrayIndex + 1;
    }

    attemptQ7 = attemptQ7 + 1;
  }
}
numbQues();



let resultFunc = function () {
  alert('your Results ' + correctResult + '/7' + ' congratulation');
};


resultFunc();
