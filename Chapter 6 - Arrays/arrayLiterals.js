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









