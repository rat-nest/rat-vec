var test = require('tape');
var cmp = require('../cmp')
var div = require('../div')
var rv = require('../index');

test('ensure equal is 0', function(t) {
  var a = rv([3, 4])
  var b = rv([1, 8]);

  console.log(div(a, b));

  t.deepEqual(cmp(a, b), [0, 0], '[0, 0]');
  t.end();
});
