const { NotImplementedError } = require('../extensions/index.js');
class DepthCalculator {
  calculateDepth(arr,counter = 0,result = []) {
      counter++
      result.push(counter);
      arr.forEach(element => {
      if (Array.isArray(element)) {
          this.calculateDepth(element,counter,result);
          }
      });
  
      return Math.max(...result);
  }
};

module.exports = {
  DepthCalculator
};