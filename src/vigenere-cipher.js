const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
  }
  areArgumentsValid(message, key){
    if(!message || typeof message !== 'string' || !key || typeof key !== 'string'){
      throw new Error('Incorrect arguments!');
    }
  }
  encrypt(message, key) {
    this.areArgumentsValid(message,key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let keyInex = 0;
    for(let i = 0; i < message.length; i++){
      const char = message[i];
      if(char >= 'A' && char <= 'Z'){
        const shift = key[keyInex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encrypted = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        result.push(encrypted);
        keyInex++;
      }else{
        result.push(char);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    this.areArgumentsValid(encryptedMessage,key);
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let keyInex = 0;
    const result = [];
    for(let i = 0; i < encryptedMessage.length; i++){
      const char = encryptedMessage[i];
      if(char >= 'A' && char <= 'Z'){
        const shift = key[keyInex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decrypted = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
        result.push(decrypted);
        keyInex++;
      }else{
        result.push(char);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
