Travis CI : [![Build Status](https://travis-ci.org/Shahor/Numparser.svg?branch=master)](https://travis-ci.org/Shahor/Numparser)


[![NPM](https://nodei.co/npm/numparser.png?downloads=true)](https://nodei.co/npm/numparser.png?downloads=true)

A simple utility for all your conversion needs

# Install

[![Greenkeeper badge](https://badges.greenkeeper.io/Shahor/Numparser.svg)](https://greenkeeper.io/)

```npm install numparser```

# Usage 

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
