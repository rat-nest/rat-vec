'use strict'

var rationalize = require('./rationalize')

module.exports = sub

function sub(a, b) {
  var n = a.length
  var r = new Array(n)
  var wa = a[n-1]
  var wb = b[n-1]
  for(var i=0; i<n-1; ++i) {
    r[i] = a[i].mul(wb).sub(b[i].mul(wa))
  }
  r[n-1] = wa.mul(wb)
  return rationalize(r)
}
