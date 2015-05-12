'use strict'

var muls = require('./muls')
var add = require('./add')

module.exports = lerp

function lerp(a, b, t) {
  var ti = [ t[1].sub(t[0]), t[0] ]
  return add(muls(a, ti), muls(b, t))
}
