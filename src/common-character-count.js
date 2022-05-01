const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let res = 0;

  for(let i=0; i<s1.length; i++) {
    console.log('s1: ', s1);
    console.log('s2: ', s2);

    if(s2.includes(s1[i])) {
      res++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
