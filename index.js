let newArray = [];
function writeCards(array, name){
  for (let i = 0; i < array.length; i++) {
    let countDown = array.length;
    countDown = countDown - 1;
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  return newArray;
}

function countDown(number){
  while ( number > 0 ){
    console.log( number );
    number -= 1;
  }
  console.log( number );
}
