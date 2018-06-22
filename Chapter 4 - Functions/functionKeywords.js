// ARGUMENTS
var sum = function () {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

// Because a design erro, arguments is not exactly an array, it is an 'array-like' object. It has some array properties, but it lacks all of the array methods
document.writeln(sum(1, 2, 3, 55, 22, 11, 12)); // Not much useful

// EXCEPTIONS
// Exceptions are unusual mishapes that intergere with tehe normal flow of a program. 
// When a mishape is detected, your program should throw an exception

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name : 'TypeError',
            message: 'Add needs numbers'
        };
    }
    return a + b;
}

var try_it = function () {
    try {
        add (1, '3');
    } catch (e) {
        document.writeln(JSON.stringify(e));
    }
}

try_it();
