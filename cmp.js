'use strict'

module.exports = compare

function compare(a, b) {
  var n = a.length-1
  var r = new Array(n)
  var aw = a[n]
  var bw = b[n]
  for(var i=0; i<n; ++i) {
    r[i] = a[i].mul(bw).cmp(b[i].mul(aw))
  }
  return r
}
