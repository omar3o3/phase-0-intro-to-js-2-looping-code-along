// Code your solutions in this file

let newArray = [];

function writeCards(array, event){
  for(let c = 0; c < array.length; c++){
    let returnMessage = `Thank you, ${array[c]}, for the wonderful ${event} gift!`;
    newArray.push(returnMessage)
  }
  return newArray;
}

function countDown(n){
  while (n>=0){

    console.log(n--)
  }
}
