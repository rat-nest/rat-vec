'use strict'

module.exports = equal

function equal(a, b) {
  var n = a.length-1
  var wa = a[n]
  var wb = b[n]
  for(var i=0; i<n; ++i) {
    if(a[i].mul(wb).cmp(b[i].mul(wa))) {
      return false
    }
  }
  return true
}
