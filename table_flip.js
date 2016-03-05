function setupFlip() {
    'use strict';

    var bind   = Function.bind;
    var unbind = bind.bind(bind);

    Error = function (Error) {
        FlipErr.prototype = Error.prototype

        function FlipErr() {

            var tempArgs = arguments;

            if (tempArgs.length > 0) {
                tempArgs[0] = '(╯°□°）╯︵ ┻━┻): ' + tempArgs[0];
            } else {
                tempArgs = ['(╯°□°）╯︵ ┻━┻): '];
            }

            var err = new (unbind(Error, null).apply(null, tempArgs));

            // Remove the reference to this function from the stack
            if (err.stack) {
                var stackArr = err.stack.split('\n');
                stackArr.splice(1,1)
                err.stack = stackArr.join('\n');
            }

            return err;
        }

        return FlipErr

    }(Error);
};

if (typeof module != 'undefined') {
    module.exports = (function () {
        setupFlip();
    })();
} else {
    setupFlip();
}

