'use strict'

var rationalize = require('./rationalize')

module.exports = dot

function dot(a, b) {
  var n = a.length
  var s = a[0].mul(b[0])
  for(var i=1; i<n-1; ++i) {
    s = s.add(a[i].mul(b[i]))
  }
  var r = [s, a[n-1].mul(b[n-1])]
  return rationalize(r)
}
