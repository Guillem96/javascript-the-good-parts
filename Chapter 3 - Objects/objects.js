// Simple declaration
var stooge = {
    "first-name" : "Guillem", // Quotes are required because the property name includes '-'
    "last-name": "Orellana"
}

// When an attempt of retrieve a nonexistent member is made then an undefined value is returned
stooge.status; // undefined

// Defaults values
var name = stooge["first-name"] || "No name";

// Avoid TypeError
stooge.father && stooge.father.first_name // Undefined, not TypeError

// ******** PROTOTYPE INHERITANCE ******
// Inherit from a prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) { // Creates an object which inherits from 'o' object
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}
// Dynamic relationship
// Chain effect like OO hierarchy
var another_stooge = Object.create(stooge); // Inherits members but not the values
another_stooge.profession = 'computer';
another_stooge["last-name"] = "Trullols";
another_stooge["middle-name"] = "Orellana";

// ***** REFLECTION *****
// Check if an object has a member or not
stooge.hasOwnProperty('first-name');
stooge.hasOwnProperty('constructor'); // Ignore chain effect, so members as constructor and toString are ignored

// ***** ENUMERATION ********
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'funtion') {
        document.writeln()(name + ' : ' + stooanother_stoogege[name])
    }
}

// Getting values in order
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
]

for (var i = 0; i < properties.length; i++) {
    document.writeln()(properties[i] + ' : ' + another_stooge[properties[i]])
}

// Delete
stooge.nickname = "Cuñao"
another_stooge.nickname = "Researcher"

another_stooge.nickname // Researcher
delete another_stooge.nickname
another_stooge.nickname // Cuñao

// To minimize the use of global variables use only one global object
var MYAPP = {}

MYAPP.stooge = {

}

MYAPP.flight = {
    // ...
}
