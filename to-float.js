'use strict'

module.exports = toFloat

function toFloat(v) {
  var n = v.length-1
  var d = v[n]
  var r = new Array(n)
  for(var i=0; i<n; ++i) {
    var h = v[i].divmod(d)
    var iv = h.div
    var ir = h.mod

    
  }
  return r
}
