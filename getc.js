'use strict'

var rationalize = require('./rationalize')

module.exports = getComponent

function getComponent(vec, i) {
  return rationalize(vec[i], vec[vec.length-1])
}
