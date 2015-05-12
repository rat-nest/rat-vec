'use strict'

var rationalize = require('./rationalize')

module.exports = max

function max(a,b) {
  var n = a.length-1
  var r = new Array(n+1)
  var aw = a[n]
  var bw = b[n]
  for(var i=0; i<n; ++i) {
    var ai = a[i].mul(bw)
    var bi = b[i].mul(aw)
    if(ai.cmp(bi) < 0) {
      r[i] = bi
    } else {
      r[i] = ai
    }
  }
  r[n] = aw.mul(bw)
  return rationalize(r)
}
