function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var time = convertHoursToMinutes(2);
console.log(time);

function getGreeting(name) {
  var get = 'Hello ' + name + '!';
  return get;
}

var greeting = getGreeting('Chris');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var m5 = addAndMultiplyBy5(10, 5);
console.log(m5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var d5 = multiplyAndDivideBy5(35, 10);
console.log(d5);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var s2 = subtractTwoNumbers(22 - 7);
console.log(s2);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circle = getCircleCircumference(5);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Chris', 'Kim');
console.log(name);

function cube(number) {
  return number * number * number;
}

var cubenum = cube(5);
console.log(cubenum);
