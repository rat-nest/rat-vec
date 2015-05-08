'use strict'

var roundRat = require('./lib/round-rat')

module.exports = toFloat

function toFloat(v) {
  var n = v.length-1
  var d = v[n]
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = roundRat(v[i], d)
  }
  return r
}
