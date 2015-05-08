'use strict'

var bn2num = require('./bn-to-num')
var ctz = require('./ctz')

module.exports = roundRat

//Round a rational to the closest float
function roundRat(a, b) {
  var h = a.divmod(b)
  var iv = h.div
  var x = bn2num(iv)
  
  var ir = h.mod
  var s = ctz(x)
  var y = bn2num(ir.shln(s).divRound(b))

  return x + y * Math.pow(2, -s)
}
