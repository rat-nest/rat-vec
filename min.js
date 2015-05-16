'use strict'

var rationalize = require('./lib/rationalize')

module.exports = min

function min(a,b) {
  var n = a.length-1
  var r = new Array(n+1)
  var aw = a[n]
  var bw = b[n]
  for(var i=0; i<n; ++i) {
    var ai = a[i].mul(bw)
    var bi = b[i].mul(aw)
    if(ai.cmp(bi) > 0) {
      r[i] = bi
    } else {
      r[i] = ai
    }
  }
  r[n] = aw.mul(bw)
  return rationalize(r)
}
