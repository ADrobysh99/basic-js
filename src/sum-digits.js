const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits( n ) {
  if(n<10){
    return n;
  }
  let count = n.toString().split("").reduce((acc, item)=>acc+ +item,0);
  return getSumOfDigits( count );
}

module.exports = {
  getSumOfDigits
};
