const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage=animals.map(animal => {
  return animal.charAt(0);
});
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers =bigNumbers.map(number => {
  return number/100;

})


// Create the smallNumbers array below
