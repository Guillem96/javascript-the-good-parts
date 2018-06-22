if (typeof Object.create !== 'function') {
    Object.create = function (o) { // Creates an object which inherits from 'o' object
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}

var myMammal = {
    name: "Herb the mammal",
    get_name: function ( ) {
        return this.name;
    },
    says: function ( ) {
        return this.saying || '';
    }
};


var myCat = Object.create(myMammal);
myCat.name = 'Gardfield';
myCat.saying = 'Meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += "r"
    }
    return s;
};
myCat.get_name = function ( ) {
    return this.says( ) + ' ' + this.name + ' ' + this.says( );
};


// Parsing the scope of a language
var block = function ( ) {
    // Remember the current scope. Make a new scope that includes everything from the current one
    var oldScope = scope;
    scope = Object.create(scope);
    // Advance past the left curly brace
    advance('{');
    // Parse using the new scope
    parse(scope);
    // Advance past the right curly brace and discard the new scope, restoring the old one
    advance('}');
    scope = oldScope;
};