const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = Number.NEGATIVE_INFINITY;
  const strN = String(n);
  
  for(let i = 0; i < strN.length; i++){
    const modN = parseInt(strN.slice(0, i) + strN.slice(i + 1));
    if (modN > max){
      max = modN;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
