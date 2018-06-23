var empty = [];

var numbers = [ // Inherit from Arrays.prototype
    'zero', 'one', 'two', 'three'
];

empty[1]        // undefined
numbers[1]      // one
empty.length    // 0
numbers.length  // 4

var numbers_obj = { // Inherit from Object.prototype
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three'
};

var stuff = [
    'string', 
    20, 
    true, 
    false, 
    NaN, 
    null, 
    undefined, 
    Infinity, 
    [
        'nested', 
        'array'
    ]
]
stuff.length

var myArray = [];
myArray.length  // 0

myArray[1000] = true;
myArray.length  // 1001

// JS please....
myArray.length = 1;

// DELETE
delete numbers[2]; // Now numbers[2] is undefined
numbers.slice(2, 1); // Delete the position 2 of the array but the following values are back propagated in order to not have an undefined value
// Slice is slow for a large array becaus all keys are reset

// ENUMERATION
for( var a in myArray) { // No guarantees about the order of the properties

} 

// Loop throug array in order
for(var i = 0; i < myArray.length; i++) {

}

// CONFUSION
// JS does not provide a helpfull tool to check if an object is an array
var is_array = function (value) {
    return value && 
        typeof value === 'object' && 
        value.constructor === Array; // Also fails when an array has been constructed on another window or frame
}

var is_array_prefect = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]'; // Mother of god O_O
}


// METHODS
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f (this[i], value);
    }
    return value;
});

var data = [4, 8, 15, 16, 23, 42];

var add = function (a, b) { return a + b; };

var mult = function (a, b) { return a * b; };

var sum = data.reduce(add, 0);
var product = data.reduce(mult, 1);


data.total = function ( ) {
    return this.reduce(add, 0);
};

var total = data.total( );

// DIMENSIONS
// In JS is not possible to initialize an array filled with an specific value
Array.dim = function (dimensions, initial) {
    var a = [], i;
    for (i = 0; i < dimensions; i++)
        a[i] = initial;
    return a;
};

// Create an array of length 10 filled with 0
var myArray = Array.dim(10, 0);

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Generate 2 dim array
for (var i = 0; i < n; i++)
    myArray[i] = [];

// Array.dim(n, []) won't work
// Each element would get a reference to the same array, which would be very bad

// No way to generate a matrix filled with values in JS
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for(i = 0; i < m; i++) {
        a = [];
        for(j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};


var myMatrix = Array.matrix(4, 4, 0);

// Create an identity matrix
Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i++) {
        mat[i][i] = 1;
    }
    return mat;
}

