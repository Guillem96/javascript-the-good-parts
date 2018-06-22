// Later
var myObj = {
    value : 0,
    increment : function (inc) { // Public method
        this.value += typeof inc === 'number' ? inc : 1;
    }  
};

// It is possible to increment value without calling the increment function
myObj.value++;

// We want to avoid unauthorized increments
var myObj = (function () {
    var value = 0;
    // This is possible thanks to fuction scope
    return  {
        increment : function (inc) { // Public method
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function ( ) {
            return value;
        }
    }
}()); // () are making the function call, so we are not saving the function to myObject variable, we are saving the function result


// Later
var Animal = function (name) { // Constructor function, creates an object with the property name
    this.name = name; 
}

Animal.prototype.get_name = function () {
    return this.name;
}

// Create a factory method to generate animals

var animal = function (name) {
    return {
        get_name: function ( ) { // Has access to the parameters
            return name;
        }
    };
};

var myAnimal = animal('Peludet');

// Now we can access to get_name method, but not to the name property. That effect is called CLOSURE


// Define a function that sets a DOM node's color to yellow an then fades it into white
var fade = function (node) {
    var level = 1;
    var step = function ( ) {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;

        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);


// BAD EXAMPLE
var add_handlers = function (nodes) {
    var i;
    for(i = 0; i < nodes.lenght; i++) {
        nodes[i].onClick = function (e) {
            alert(i);
        };
    }
};

// BETTER EXAMPLE
var add_handlers = function (nodes) {
    var helper = function (i) {
        return function (e) {
            alert(i); // Binding the value to the parameter's value
        };
    };

    for(i = 0; i < nodes.lenght; i++) {
        nodes[i].onClick = helper(i); // Avoid creating functions inside a loop
    }
};

