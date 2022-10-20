// Loops Exercise
// 1.
for (i = 1; i<=7; i++){
    console.log(i);
}

// 2.
for (i = 5; i <= 25; i += 4) {
    console.log(i);
};

// 3a.
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b.
for (friends of wizards) {
    console.log(friends);
};

// 4a.
let harryPotterMovies = 0;

// 4b.
while (harryPotterMovies < 8) {
    harryPotterMovies++;
    // 4c.
    console.log(harryPotterMovies);
}

// Bonus Q's

// 5a.
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];

// 5b.
for (houses of hogwartsHouses){
    for (letter of houses){
        console.log(letter);
    }
}

// 6a.
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b.
// let quoteLine = ``;
// for (i = 0; i < quote.length; i++){
//     quoteLine = quoteLine + quote[i] + ` `;
// }
// console.log(quoteLine);

// Or
let magicQuote = ``;
for (i =0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`;
}
magicQuote = magicQuote.trim();

console.log(magicQuote);

// 7.
// Inspo by FizzBuzz
for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}