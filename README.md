Travis CI : [![Build Status](https://travis-ci.org/Shahor/Numparser.svg?branch=master)](https://travis-ci.org/Shahor/Numparser)

A simple utility for all your conversion needs

```javascript
let NumParser = require('numparser')

console.log(NumParser('10')) // 10

// before
[10, 10, 10].map(parseInt) // [10, NaN, 2]
// after
[10, 10, 10].map(NumParser) // [10, 10, 10]
```

```
 (•_•)    PROBLEM
<)   )╯
 /    \

 ( •_•)  SOLVED
\(   (>
 /    \
```
