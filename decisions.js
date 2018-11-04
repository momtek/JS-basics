/*
var count = 3;
if (count == 4) {
  console.log('Count is 4');
} else if (count > 4) {
  console.log('Count is greater than 4');
} else if (count < 4) {
  console.log('Count is less than 4');
} else {
  console.log('Count is not 4');
}
*/
/*
let hero = 'Batman';
switch (hero.toLowerCase()) {
  case 'superman':
    console.log('super strength');
    console.log('x-ray visoin');
    break;
  case 'batman':
    console.log('intelligent');
    console.log('fighing skills');
    break;
  default:
    console.log('member of JLA');
}
*/
/*
let expr = 'Apples';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
*/

// ternary operator
let a = 2;
let b = '2';
//let result = a == b ? 'equal' : 'inequal';
//let result = a === b ? 'equal' : 'inequal';
let result = a !== b ? 'not equal' : 'equal';
console.log(result);
//console.log(a == b ? 'equal' : 'inequal');
