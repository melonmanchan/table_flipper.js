'use strict';

function setupFlip() {
    var oldProto = Error.prototype;

    /*http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/3535758#3535758*/
    Error = function (message, fileName, lineNumber) {
        if (this.stack) {
            if (typeof(Components) != 'undefined') {
                this.stack = this.stack.substring(this.stack.indexOf('\n') + 1);
            }
            else if (typeof chrome != 'undefined' || typeof process != 'undefined') {
                this.stack = this.stack.replace(/\n[^\n]*/,'');
            }
        }

        this.message    = message    === undefined  ? '(╯°□°）╯︵ ┻━┻): ' + this.message   : '(╯°□°）╯︵ ┻━┻): ' + message;
        this.fileName   = fileName   === undefined ? this.fileName   : fileName;
        this.lineNumber = lineNumber === undefined ? this.lineNumber : lineNumber;

    }

    Error.prototype = oldProto;
}

module.exports = (function () {
    setupFlip();
})();

