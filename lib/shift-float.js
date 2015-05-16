'use strict'

module.exports = shiftFloat

//Shift a float without overflowing
function shiftFloat(x, shift) {
  while(shift > 1023) {
    x *= Math.pow(2, 1023)
    shift -= 1023
  }
  while(shift < -1023) {
    x *= Math.pow(2, -1023)
    shift += 1023
  }
  return x * Math.pow(2, shift)
}
