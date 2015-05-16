rat-vec
=======
Exact rational vector arithmetic.

<img src="img/rat.jpg">

rat-vec is *slow* but reliable.  You can use it to get quickly and reliably
implement geometric algorithms, then go back and smash your head into a wall
trying to optimize them with filters and predicates and snap rounding and so on.

This library is built on top of [bn.js](https://github.com/indutny/bn.js/)

# Example

```javascript
var vec = require('rat-vec')

var toFloat = require('rat-vec/to-float')

var add = require('rat-vec/add')

var sub = require('rat-vec/sub')

var dot = require('rat-vec/sub')

```

# Install

```
npm i rat-vec
```

# API

#### `var r = require('rat-vec')(v)`
Converts a vector of `n` floating point numbers into an exact rational vector of `n+1` big ints.

* `v` is a vector of floats, rationals or strings

**Returns** A rational vector of big integers

#### `var s = require('rat-vec/scalar')(numer, denom)`
Constructs a rational scalar

* `numer` is the numerator
* `denom` is the denominator

**Returns** A rational number encoded as a pair of bignumbers

#### `var v = require('rat-vec/to-float')(r)`
Round a rational vector of big integers into an approximate vector of floats.

* `r` is a vector of `n+1` big integers

**Returns** A vector of `n` floats representing the closest representable vector

#### `var s = require('rat-vec/add')(a, b)`
Performs per-component vector addition on `a` and `b`

* `a` is a rational vector
* `b` is a rational vector

**Returns** The sum of `a` and `b`

#### `var d = require('rat-vec/sub')(a, b)`
Performs per-component vector subtraction on `a` and `b`

* `a` is a rational vector
* `b` is a rational vector


#### `var f = require('rat-vec/dot')(a, b)`
Computes the dot product of `a` and `b` returning a 1d rational vector.

#### `var v = require('rat-vec/muls')(a, s)`
Multiplies a rat vec by a scalar or rat (e.g. `require('rat-vec')([1/2])`)

#### `var v = require('rat-vec/divs')(a, s)`
Divides a rat vec by a scalar or rat (e.g. `require('rat-vec')([1/2])`)

#### `var lerp = require('rat-vec/lerp')(a, b, t)`
Linearly interpolate between `a` and `b` with parameter `t`

#### `var c = require('rat-vec/cmp')(a, b)`
Compares the components of `a` and `b`, returns an array of `0,+1,-1` whose components are the result of comparing each value.

#### `var eq = require('rat-vec/equals')(a, b)`
Test if two rational vectors are equal.

#### `var h = require('rat-vec/max')(a, b)`
Computes the component-wise maximum of `a` and `b`

#### `var l = require('rat-vec/min')(a, b)`
Computes the component-wise minimum of `a` and `b`

#### `var p = require('rat-vec/mul')(a, b)`
Computes the component-wise product of `a` and `b`

#### `var r = require('rat-mul/recip')(a)`
Computes the component-wise reciprocal of `a`

#### `var q = require('rat-mul/div')(a, b)`
Computes the component-wise quotient of `a` and `b`

#### `var s = require('rat-vec/getc')(v, i)`
Returns the `i`th component of `v`

#### `var v = require('rat-vec/setc')(v, i, s)`
Returns a copy of `v` whose `i`th component is `s`

# TODO

* More testing
* Other functions?

# Credits

(c) 2015, MIT License

[Rat logo CC licensed, (c) La Tarte Au Citron](https://www.flickr.com/photos/tartaucitron/11328783804/in/photolist-ig5YJG-6rds6G-9ZBxcz-b9JfZ-5qdtpw-5e48pj-i6RTUn-4BbDwn-ag7YHX-9ZEtw3-7dV4fm-i6Sh6L-ieVirs-9ntyy-i6S2d9-5UAf8v-9ZBweF-qdmsJJ-aioESD-4AQEj5-9iL3y4-b4yPpk-furjEV-5UExDy-mgNSyg-5y7RQ5-ddxkgR-RTNKs-9ZEna9-5UT4cs-uZnbz-YWUx-aDRSKQ-dtTDuN-ieVsZV-5y3sLe-5TrTjY-uaN1h-5y3icB-5XjCbR-dm3VZC-5R32Eb-7ZKsBm-9ZBx4g-7TVNKb-bkJN5N-9hyNho-9ZBvwe-9ZEnmq-9ZEnsy)
