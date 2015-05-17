var test = require('tape')
var vec = require('../vec')
var float = require('../to-float');
var scalar = require('../scalar')

test('falls back to floating point', function(t) {

  var r = float(vec([1/2, 1/4]));
  t.deepEqual(r, [0.5, 0.25], 'works as expected')

  t.end();
});

test('accepts an array of rats [1/2, 1/4]', function(t) {

  var r = float(vec([scalar(1, 2), scalar(1, 4)]));
  console.log(r);

  t.deepEqual(r, [0.5, 0.25], 'works as expected')

  t.end();
});

test('accepts an array of rats [1/2, 1/3]', function(t) {

  var r = float(vec([scalar(1, 2), scalar(1, 3)]));
  t.deepEqual(r, [0.5,  0.3333333333333333], 'works as expected')

  t.end();
});

test('vec() stress', function(t) {
  var range = 1e4;
  for (var i = 1; i<range; i++) {
    var r = float(vec([scalar(1, 4), scalar(1, i)]));
    t.deepEqual(r, [0.25,  1/i], 'works as expected')
  }
  t.end();
});
