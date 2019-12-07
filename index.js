// Code your solutions in this file

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( beginCount ) {
    while ( beginCount > 0 ) {
      console.log( beginCount );
      beginCount -= 1;
    }
    console.log( beginCount );
  }



