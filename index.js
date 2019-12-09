// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gift) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

function writeCards(array, name) {
    let messages = []
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return messages;
}

function countDown(positiveInteger) {
    while (positiveInteger > 0) {
        console.log(positiveInteger);
        positiveInteger -= 1;
    }
    console.log(positiveInteger);
}
