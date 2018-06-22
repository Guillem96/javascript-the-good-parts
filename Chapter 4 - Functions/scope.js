var foo = function ( ) {
    var a = 3, b = 5;

    var bar = function ( ) {
        var b = 7; c = 11; // b is overrided
        a += b + c; // a overrided
    };

    // The initial a and b are restored
    bar ( );
    // b is the smae but a is 21
};

// languages like C provide *Block scope*. All variables defined in a block are not visible from outside of the block
// this is good, but JS does not provide it although its syntaxis suggests that it does. (Evil)
// JS -> Function scope: The variables defined in a function are not visible outside it
// It is recommended to declare all variables used ina function at the top of the function body.
// Many other languages, which use block scope, recommend declare the variables as late as possible
