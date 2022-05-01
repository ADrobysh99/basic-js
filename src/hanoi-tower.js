const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
	let turns = 0;
	for(let i = 0; i < disksNumber; i++) {
		turns += Math.pow(2, i);
	}

	let seconds =  Math.floor(3600 / turnsSpeed * turns);

	return { turns: turns, seconds: seconds}
}

module.exports = {
  calculateHanoi
};