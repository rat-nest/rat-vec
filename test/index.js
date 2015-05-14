var test = require('tape');
var equal = require('../equal')
var rv = require('../index');

test('(1/5) == 1/5', function(t) {
  var a = rv([1/5]);
  var b = rv([1/5]);

  t.deepEqual(equal(a, b), true, '[0]');
  t.end();
});
