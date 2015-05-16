'use strict'

var rationalize = require('./lib/rationalize')

module.exports = mul

function mul(a, b) {
  var n = a.length
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = a[i].mul(b[i])
  }
  return rationalize(r)
}
