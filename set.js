'use strict'

var rationalize = require('./lib/rationalize')
var scalar = require('./scalar')

module.exports = setComponent

function setComponent(vec, i, x) {
  var v = scalar(x)
  var n = vec.length-1
  var result = vec.slice()
  result[i] = v[0].mul(vec[n])
  result[n] = vec[n].mul(v[1])
  return rationalize(result)
}
