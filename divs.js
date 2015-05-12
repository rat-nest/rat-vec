'use strict'

var muls = require('./muls')

module.exports = divs

function divs(a, s) {
  return muls(a, [s[1], s[0]])
}
