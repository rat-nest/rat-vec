'use strict'

module.exports = shiftFloat

function shiftFloat(x, shift) {
  return x * Math.pow(2, shift)
}
