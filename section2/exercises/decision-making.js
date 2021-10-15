/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
In lines 14-18 there is an If/Else statement occurring. The statement is checking the condition
doorChoice is equal to 1. If that evaulates to true then the variable bearClothing will be assigned
a value of "hat." If that condition evauluates to false then bearClothing will be assigned the value
of "scarf" instead.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value assigned to it based on how the first if statement evaulates.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If the variable doorChoice is changed to an assigned value of 3 then the bearClothing value would
be scarf. The if statement is setup to assign a particular value if the condition doorChoice === 1
evauluates to true. If it evaulates to false then the second value is assigned.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27-35 there is an If/Else statement occuring utilizing both if, else, and else if in order
to execute based on the conditions. In this case, the condition is whether the variable bearChoice strictly
equals 1. If this evaluates to true then the first string is executed. If bearChoice equals 2 then the
second string is executed -- if bearChoice equals 3 then the third string is executed, and if bearChoice
evaluates to anything other than 1, 2, or 3 then the last string will execute.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If the variable bearChoice is equal to 3 then the final outcome will be the third string: "You run as fast
as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If the variable doorChoice is equal to 1 and bearChoice is equal to 2 then the final outcome will be the second
string in the final If/Else statment with hat as the bearClothing: "You tell the bear the hat is too small and
it starts to cry!"

7. What is your favorite ending?
I like if you pick the secret 4th choice at the last If/Else statement (assign bearChoice a value of 4) and stay
behind to be the bear's best friend!

*/
