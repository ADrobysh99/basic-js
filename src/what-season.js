const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(Object.getOwnPropertyNames(date).length!==0){
    throw Error('Invalid date!');
  }
  let month;  
  try{
      month = date.getMonth();
  }catch(e){
    throw Error('Invalid date!');
  }
  
  if(month===11||month===0||month===1){
    return 'winter';
  }
  if(month===2||month===3||month===4){
    return 'spring';
  }
  if(month===5||month===6||month===7){
    return 'summer';
  }
  if(month===8||month===9||month===10){
    return 'autumn';
  }
}
module.exports = {
  getSeason
};
