const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members))return false;
  return members.filter(a => (typeof(a) === "string"))
    .map(a => a.trim()[0].toUpperCase()).sort().join("");
}

module.exports = {
  createDreamTeam
};
