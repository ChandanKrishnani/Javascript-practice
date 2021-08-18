const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));
const interestingWords=words.filter(word => {
  return word.length>5;
});


console.log(interestingWords.every((word) => { return word.length > 5; }));
