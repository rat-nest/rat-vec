'use strict'

var mul = require('./mul')
var recip = require('./recip')

module.exports = div

function div(a, b) {
    return mul(a, recip(b))
}
