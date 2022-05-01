const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  const mask = /([0-9]|[A-F]){2}/gm;
	const arr = n.match(mask);
	return arr.length === 6
}
module.exports = {
  isMAC48Address
};
