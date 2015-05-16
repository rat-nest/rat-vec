'use strict'

var bn = require('./num-to-bn')

module.exports = frac

function frac(num, den) {
  return [bn(num), bn(den)];
}
