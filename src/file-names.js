const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
	for(let i = 0; i < names.length; i++){
		let count = 1;

		for(let j = i + 1; j < names.length; j++) {

			if(names[i] === names[j]){
				let temp = names[j];
				names[j] = `${temp}(${count})`;
				count++;
			}

		}
		
	}
	return names;
}

module.exports = {
  renameFiles
};