// CONSTRUCTOR INVOCATION
// JS is a prototypal inheritance language.
// Meaning that an object can inherit properties directly grom other objects. The language is class free

// If a function is invoked with the new prefix, tthen a new object will be created with a hidden link to the value of the function's prototype member, and
// *this* will be bound to that new object.

// Not recommended
var Animal = function (name) { // Constructor function, creates an object with the property name
    this.name = name; 
}

Animal.prototype.get_name = function () {
    return this.name;
}

var myAnimal = new Animal("Peludet"); // By convention, Store the resulting object in a camelCase variable

document.writeln(JSON.stringify(myAnimal));