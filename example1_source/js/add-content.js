//var today = new Date();
//var hourNow = today.getHours();
var greeting;

const d = new Date();
let hour = d.getHours();

function timeFunc(numberTime){
  if(numberTime >= 0 && numberTime <= 12) {
    greeting = 'Good morning!';
  }  else if(numberTime >= 12 && numberTime <= 18) {
    greeting = 'Good aftenoon!';
  }  else if(numberTime >= 18 && numberTime <= 24) {
    greeting = 'Good evening!';
  }  else if(numberTime === 24 || numberTime === 0 ) {
    greeting = 'Good Morning!';
  }  else if(numberTime === 12) {
    greeting = 'Good Afternoon!';
  }  else if(numberTime === 18) {
    greeting = 'Good Evening!';
  }
  console.log(greeting);
}
greeting = 'Welcome!';

try {
  timeFunc(hour);
}
catch (err) {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');