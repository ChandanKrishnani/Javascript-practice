const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries= Object.entries(robot);


console.log(robotEntries);
const newRobot=Object.assign({laserBlaster: true, voiceRecognition: true},robot)
// Declare newRobot below this line:


console.log(newRobot); 
