// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event_name) {
	let cards = []
	for (let i = 0; i < names.length; i++) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
	}
	return cards
}

function countDown(starting_number) {
	while(starting_number >= 0) {
		console.log(starting_number)
		starting_number--
	}
}