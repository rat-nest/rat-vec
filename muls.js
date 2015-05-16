'use strict'

var rationalize = require('./rationalize')
var rv = require('./index')

module.exports = muls

var t = [0];
function muls(a, s) {
  if (!Array.isArray(s)) {
    t[0] = s
    s = rv(t)
  }

  var n = a.length-1
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    r[i] = a[i].mul(s[0])
  }
  r[n] = a[n].mul(s[1])
  return rationalize(r)
}
