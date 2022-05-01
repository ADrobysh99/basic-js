const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const positiveSorted = arr.filter(item => item > 0).sort((a, b) => a - b);
	
	let index = 0;
	return arr.map(item => {
		if(item > 0) {
			let temp = positiveSorted[index];
			index++;
			return temp;
		}
		return item;
	})
}


module.exports = {
  sortByHeight
};
