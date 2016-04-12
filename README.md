# end-with

> Determines whether a string ends with the characters of another string.

> ES2015 [String#endsWith()](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.endswith) ponyfill.

> Ponyfill: A polyfill that doesn't overwrite the native method.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/end-with/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/end-with/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/end-with)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/end-with/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/end-with)


## Install

```
$ npm install --save end-with 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/end-with/blob/master/test/spec/index.js)

```js
var endWith = require('end-with');

endWith('abcde', 'e');  // => true
endWith('abcde', 'de'); // => true
endWith('abcde', 'bc'); // => false
endWith('abcde', '');   // => true
endWith('abcde');       // => false
endWith('abcde', null); // => false

```

## Related

- [start-with](https://github.com/bubkoo/start-with) - Determines whether a string begins with the characters of another string.
- [pad-start](https://github.com/bubkoo/pad-start) - ES spec-compliant shim for String.prototype.padStart.
- [pad-end](https://github.com/bubkoo/pad-end) - ES spec-compliant shim for String.prototype.padEnd.

## Contributing
 
Pull requests and stars are always welcome. 

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/end-with/issues).
   
But before doing anything, please read the [CONTRIBUTING](https://github.com/tunnckocore/starts-with/blob/master/CONTRIBUTING.md) guidelines.
