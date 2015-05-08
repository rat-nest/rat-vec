'use strict'

module.exports = float2rat

var BN = require('bn.js')
var bn = require('./lib/num-to-bn')
var db = require('double-bits')
var rationalize = require('./rationalize')

function float2rat(v) {
  var n = v.length
  var lcm = 0
  for(var i=0; i<n; ++i) {
    if(v[i]) {
      lcm = Math.min(lcm, db.exponent(v[i])-53)
    }
  }
  var r = new Array(n+1)
  if(lcm < -1023) {
    //Handle the case where one of the components is a denormal
    for(var i=0; i<n; ++i) {
      var vf = Math.abs(v[i])
      if(vf === 0) {
        r[i] = new BN(0)
      } else if(vf < Math.pow(2, -80)) {
        var vv = v[i] * Math.pow(2, 540)
        r[i] = bn(vv * Math.pow(2, 540))
      } else if(vf > Math.pow(2, 53)) {
        r[i] = bn(vf).shln(1080)
      } else {
        r[i] = bn(v[i] * Math.pow(2, 540)).shln(540)
      }
    }
    r[n] = (new BN(1)).shln(1080)
  } else {
    var f = Math.pow(2, -lcm)
    for(var i=0; i<n; ++i) {
      r[i] = bn(v[i]*f)
    }
    r[n] = bn(f)
  }
  return rationalize(r)
}
