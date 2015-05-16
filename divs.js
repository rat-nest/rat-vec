'use strict'

var muls = require('./muls')
var rat = require('./scalar')
var recip = require('./recip')

module.exports = divs

function divs(a, s) {
  return muls(a, recip(rat(s)))
}
