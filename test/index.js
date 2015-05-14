var test = require('tape');
var cmp = require('../cmp')
var rv = require('../index');

test('(1/5) == 1/5', function(t) {
  var a = rv([1/5]);
  var b = rv([1/5]);

  t.deepEqual(cmp(a, b), [0], '[0]');
  t.end();
});
