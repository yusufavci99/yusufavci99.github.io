var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

//alert( multiply(4, 7));
multiply(20, 20);
multiply(0.5, 3);

/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
	
    if(mySrc === 'images/biz-graph.png') {
		
      myImage.setAttribute ('src','images/money.jpg');
    } else {
      myImage.setAttribute ('src','images/biz-graph.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
