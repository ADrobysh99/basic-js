const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
  let arr = n.toString().split('');
	let inDel;

	for(let i = 0; i < arr.length; i++){
		if(i === arr.length - 1) {
			inDel = arr.length - 1;
			break;
		}
		
		if(+arr[i] < +arr[i + 1]) {
			inDel = i;
			break;
		}
	}

	arr.splice(inDel, 1);
	return +arr.join('');
}

module.exports = {
  deleteDigit
};
