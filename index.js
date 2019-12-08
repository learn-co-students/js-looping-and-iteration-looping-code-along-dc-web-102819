// Code your solutions in this file
  
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( var i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

function countDown(start){

    while(start >= 0){
        console.log(start)
        start --
    }
}

