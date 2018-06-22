// Crete new functions using an existent function and a parameter
Function.method('curry', function ( ) {
    var slice = Array.prototype.slice, args = slice.apply(arguments), that = this;
    return function ( ) {
        return that.apply(null, args.concat(slice.apply(arguments))); // Arguments is not an array, so it does not have concat method
    };
});

var add1 = add.curry(1);

add1(6); // 7

