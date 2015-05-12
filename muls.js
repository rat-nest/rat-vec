'use strict'

var rationalize = require('./rationalize')

module.exports = muls

function muls(a, s) {
  var n = a.length-1
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = a[i].mul(s[0])
  }
  r[n] = a[n].mul(s[1])
  return rationalize(r)
}
