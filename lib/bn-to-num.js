'use strict'

module.exports = bn2num

//TODO: Make this good
function bn2num(b) {
  var l = b.length;
  var words = b.words;
  if (l === 1) {
    var v = words[0];
    return b.sign ? -v : v;
  } else if (l === 2) {
    var v = words[0] + (words[1] * 0x4000000);
    return b.sign ? -v : v;
  }

  return +b.toString()
}
