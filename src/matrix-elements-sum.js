const { NotImplementedError } = require('../extensions/index.js');
function getMatrixElementsSum(matrix) {
  let res = 0;

  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
      res += i==0 ? matrix[i][j] : matrix[i-1][j] != 0 ? matrix[i][j] : 0;
    }
  }
  return res;
}
module.exports = {
  getMatrixElementsSum
};