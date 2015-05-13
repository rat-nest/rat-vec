var test = require('tape');
var cmp = require('../cmp')
var dot = require('../dot')
var rv = require('../index');
var tobn = require('../lib/num-to-bn')

test('(0, 1) dot (1, 1)', function(t) {
  var a = rv([0, 1]);
  var b = rv([1, 1]);
  var c = rv([1]);

  t.deepEqual(cmp(dot(a, b), c), [0], 'equals rat(1)');
  t.end();
});

test('(.5, 0, 0) dot (100.125, 0, 50.2)', function(t) {
  var a = rv([0.5, 0, 0]);
  var b = rv([100.125, 0, 50.2]);
  var c = rv([tobn(801), tobn(16)]);

  t.deepEqual(cmp(dot(a, b), c), [0], 'equals rat(800/16)');
  t.end();
});
