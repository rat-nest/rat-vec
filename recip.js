'use strict'

var rationalize = require('./lib/rationalize')

module.exports = recip

//FIXME: is there a better algorithm for this?
function recip(a) {
  var n = a.length-1
  var r = new Array(n+1)
  var aw = a[n]
  for(var i=0; i<n; ++i) {
    r[i] = aw
    for(var j=0; j<n; ++j) {
      if(j !== i) {
        r[i] = r[i].mul(a[j])
      }
    }
  }

  r[n] = a[0]

  if (n !== 1) {
    for(var i=0; i<n; ++i) {
      r[n] = r[n].mul(a[i])
    }
  }
  return rationalize(r)
}
