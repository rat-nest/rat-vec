module.exports = createVec

var fromFloat = require('./index');
var BN = require('bn.js')


function lcm(a, b) {
  return
}

function createVec(v) {
  if (!Array.isArray(v[0])) {
    return fromFloat(v)
  }

  var d = v[0][1]
  var l = v.length
  var r = new Array(l+1)

  for(var i=0; i<l; ++i) {
    r[i] = v[i][0];
  }

  var c = v[0][1];
  for(var i=1; i<l; ++i) {
    // lcm
    d = d.mul(v[i][1].div(d.gcd(v[i][1])));
    // collect the numerators
  }

  r[l] = d;

  for(var i=0; i<l; ++i) {
    r[i] = r[i].mul(d.div(v[i][1]))
  }

  return r;
}
