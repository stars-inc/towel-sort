module.exports = function towelSort (matrix) {
  return !matrix || !matrix.length 
    ? []
    : matrix.flat(Infinity).sort((a, b) => a - b)
}