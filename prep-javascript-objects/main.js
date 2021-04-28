var person = {
  firstName: 'Chris',
  lastName: 'Kim',
  hobby: 'Traveling'
};

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'student';
console.log("The person's current job is:", person.job);

person.previousJob = 'student';
console.log("The person's previous job is:", person.previousJob);

console.log(person);

var myCar = {
  make: 'Lexus',
  model: 'IS350',
  year: '2020'
};

myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);

myCar['color'] = 'white';
console.log(myCar);
