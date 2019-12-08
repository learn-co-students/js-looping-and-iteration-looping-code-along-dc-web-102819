const names = ["Ben", "Will", "Nic"]

function writeCards(names, surprise) {
    let thankYouCards = [] 
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    }
    return thankYouCards
}

function countDown() {
    let i = 0;
    while (i < 11) {
        console.log(i++);
    }
}