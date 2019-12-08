function writeCards(array, event){
    let newArray = []
    for(let i = 0;  i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray
}

function countDown(integer){
    let i = integer;
    while(0 <= integer){
        console.log(integer--);
    }
}