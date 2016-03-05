'use strict';
var test       = require('tape')
var table_flip = require('./table_flip.js');

test('should override error constructor', function (t) {
    try {
        throw new Error('This is just a test');
    } catch (e) {
        t.equal((e.message.indexOf('(╯°□°）╯︵ ┻━┻)') !== -1), true);
    }

    t.end();
});

