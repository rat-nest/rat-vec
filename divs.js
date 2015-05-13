'use strict'

var muls = require('./muls')
var rv = require('./index')
var recip = require('./recip')

module.exports = divs

var t = [0]
function divs(a, s) {
  var r;
  if (!Array.isArray(s)) {
    t[0] = s
    s = rv(t)
  }

  return muls(a, recip(s))
}
