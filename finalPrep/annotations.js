// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

// this is a function with 5 parameters (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
// declare a variable greeting and assign it to a string with the name parameter added in with interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// declare a variable demographics - the value is an array with the name and age parameters
  var demographics = [name, age];
// declare a variable powerSaying - the value is a string with the specialPower parameter added in with concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declare a object BuiltBear with 6 key pairs - several parameters are included in addition to static data
  var builtBear = {
// first key pair basicInfo with the parameter demographics
    basicInfo: demographics,
// second key pair clothes with the parameter clothes
    clothes: clothes,
// third key pair exterior with the parameter fur
    exterior: fur,
// fourth key pair cost with the static parameter of 49.99
    cost: 49.99,
// fifth key pair sayings with an array including the greeting and powerSaying parameters along with a static string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// sixth key pair isCuddly with the static boolean value true
    isCuddly: true,
  };
// when the function is called it will return the builtBear object value
  return builtBear
}
// the buildABear function is being called with name = 'Fluffy', age = 4, fur = 'brown', clothes = ['pants', 'jorts', 'tanktop'], and the specialPower 'give you nightmares'
// this function will output the builtBear object as follows:
// basicInfo: [ 'Fluffy', 4 ],
//  clothes: [ 'pants', 'jorts', 'tanktop' ],
//  exterior: 'brown',
//  cost: 49.99,
//  sayings: ['Hey partner! My name is Fluffy - will you be my friend?!','Did you know that I can give you nightmares ?','Goodnight my friend!'],
//  isCuddly: true
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');

// the buildABear function is being called with name = 'Sleepy', age = 2, fur = 'purple', clothes = ['pajamas', 'sleeping cap'], and the specialPower 'sleeping in'
// this function will output the builtBear object as follows:
// basicInfo: [ 'Sleepy', 2 ],
//   clothes: [ 'pajamas', 'sleeping cap' ],
//   exterior: 'purple',
//   cost: 49.99,
//   sayings: ['Hey partner! My name is Sleepy - will you be my friend?!','Did you know that I can sleeping in ?','Goodnight my friend!'],
//   isCuddly: true
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz


// This is a function with 3 parameters (num1, num2, range)
function fizzBuzz(num1, num2, range) {
// Declares a for loop which starts index 0, has a condition  to run until the index position is less than or equal to the range, and iterate by 1 each time
  for (var i = 0; i <= range; i++) {
// Declares an if statement with an AND operator -- if i is a multiple of num1 and i is a multiple of num2 then 'fizzbuzz' should be printed to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// Declares an additonal conditional statement (else if) - if i is a multiple of just num 1 then 'fizz' should be printed to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
// Declares an additional conditional statement (else if) - if i is a muiltiple of just num2 then 'buzz' should be printed to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
// Declares the final piece of the if statement (else) - if i is not a multiple of either num1 or num 2 then the index number itself should be printed to the console
    } else {
      console.log(i);
    }
  }
}

// the fizzBuzz function is being called num1 = 3, num2 = 5, and range = 100
// this function will output the following data (just the first 10 values - since the range is 100 numbers up to 100 will be printed):
// fizzbuzz
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
fizzBuzz(3, 5, 100);

// the fizzBuzz function is being called num1 = 5, num2 = 8, and range = 400
// this function will output the following data (just the first 10 values - since the range is 400 numbers up to 400 will be printed):
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
fizzBuzz(5, 8, 400);
