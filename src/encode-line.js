const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length <= 1) return str;

  let cnt = 1;
  let pre = str[0]
  let encoded = '';
  for(let i = 1; i < str.length; i++){
    if (str[i] === pre){
      cnt++;
    }else{
      encoded += (cnt > 1 ? cnt:'') + pre;
      pre = str[i];
      cnt = 1;
    }
  }
  encoded += (cnt > 1 ? cnt:'') + pre;
  return encoded;
}

module.exports = {
  encodeLine
};
