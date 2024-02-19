const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows =  matrix.length;
  const cols = matrix[0].length;
  for(let i = 0; i < rows; i++){
    const row = [];
    for(let j = 0; j < cols; j++){
      let flagged = 0;
      for(let r = Math.max(0, i - 1); r <= Math.min(i+1,rows - 1); r++){
        for(let c = Math.max(0, j - 1); c <= Math.min(j + 1, cols - 1); c++){
          if(!(r === i && c === j) && matrix[r][c]){
              flagged++;
          }
        }
      }
      row.push(flagged);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper
};
