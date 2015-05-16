'use strict'

var rationalize = require('./lib/rationalize')
var rat = require('./scalar')

module.exports = muls

function muls(a, x) {
  var s = rat(x)
  var n = a.length-1
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = a[i].mul(s[0])
  }
  r[n] = a[n].mul(s[1])
  return rationalize(r)
}
