const isThirsty = true;

if (isThirsty) {
    console.log("Drink some water");
} else {
    console.log("Stay hydratet then!");
}

const day = "Monday";

if (day === "Monday") {
    console.log("Today is Monday");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday");
} else if (day === "Wednesday") {
    console.log("Today is wednesday");
} else if (day === "Thursday") {
    console.log("Today is Thursday");
} else if (day === "Friday"); {
    console.log("Today is Friday");
}


//detyra1: If u have 60+ points in exam ur good g and if dont have more or 60 points u fail G.


let points = 99;

if (points < 50) {
    console.log("You have'nt passed")
} else if (points >= 50 && points <= 60) {
    console.log("Your grade is 6")
} else if (points >= 60 && points <= 70) {
    console.log("Your grade is 7")
} else if (points >= 70 && points <= 80) {
    console.log("Your grade is 8")
} else if (points >= 80 && points <= 90) {
    console.log("Your grade is 9")
} else if (points >= 90 && points <= 100) {
    console.log("Your grade is 10")
}

// String concatination

let sentence1 = ("today is such a ");
let sentence2 = ("beautiful day");

console.log(sentence1 + sentence2);

const firstName = "Adni";
const lastName = " Latifi";
const age = 20;
const job = "Web Developer";

console.log("Hello my name is " + firstName + ""
    + lastName + " and I am a " + age + " year old " + job);

// Template literals
console.log(`Hello my name is ${firstName} ${lastName} and I am a ${age} year old ${job}.
My birthyear is ${2022 - age}`);

// Type coercion and type conversion
const random = "5"
console.log(typeof (random));

const x = 10;
const y = "10";
const z = x * y;
console.log(z, typeof (z));


// Truthy and falsy values
// Falsy values are:
// 0
// "" - empty string
// Nan - not a number
// Null
// Undefined
// False

// console.log(Boolean(null));



const money = 0;

if (money) {
    console.log("go on a vacation")
} else {
    console.log("Go get a job");
}

//There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!Calculate the average score for each team, using the test data belowCompare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
//HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
//TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

console.log("test data1");

let dolphinsScore = (96 + 108 + 89 / 2);
let koalasScore = (88 + 91 + 110 / 2);
console.log(dolphinsScore)
console.log(koalasScore)

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log("dolphins win")
} else if (koalasScore > dolphinsScore && koalasScore >=
    100) {
    console.log("Koalas win")
}

// .....

