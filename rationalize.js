'use strict'

var bn = require('bn.js')

module.exports = rationalize

function rationalize(v) {
  var d = v[0]
  for(var i=1; i<v.length; ++i) {
    d = d.gcd(v[i])
  }
  for(var i=0; i<v.length; ++i) {
    v[i] = v[i].div(d)
  }
  return v
}
