const guests = ["Ada", "Brendan", "Ali"]
const event = "birthday"

function writeCards(guests, event) {
    let thankYouCards = []
    for (let i = 0; i < guests.length; i++) {
        thankYouCards.push(`Thank you, ${guests[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown (startingNumber) {
    while (startingNumber > 0){
        console.log(startingNumber);
        startingNumber -= 1;  
    }
    console.log(startingNumber);
}
