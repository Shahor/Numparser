'use strict'

var NumParser = require('../index.js')
,   Tape = require('tape')

Tape('basic tests', function (t) {
    t.plan(2)

    t.equal(NumParser('10'), 10)
    t.equal(NumParser(10), 10)
})

Tape('super advanced tests', function (t) {
    t.plan(2)

    t.deepEqual([1, 2, 3].map(NumParser), [1, 2, 3])
    t.deepEqual(['1', '2', '3'].map(NumParser), [1, 2, 3])
})
