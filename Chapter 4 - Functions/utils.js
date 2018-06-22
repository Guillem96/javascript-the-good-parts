// METHOD PROPERTY
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

// CURRY   
Function.method('curry', function ( ) {
    var slice = Array.prototype.slice, args = slice.apply(arguments), that = this;
    return function ( ) {
        return that.apply(null, args.concat(slice.apply(arguments))); // Arguments is not an array, so it does not have concat method
    };
});

// AUGMENTING TYPES
// JS lacks a method that removes spaces from the end of a string
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
});

// GENERATE DYNAMIC EVENTS WITH HELPERS
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

// CLOSURE
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

// MODULE USING CLOSURE
var serial_maker = function ( ) {
    // Produce an object that produces unique strings.
    // A unique string is made up of two parts: a prefix and a sequence number.
    // The object comes woth methods for setting the prefix and sequence number, and a gensym method that produces
    // unique strings.

    var prefix = '';
    var seq = 0;
    return {
        set_prefix : function (p) {
            prefix = p;
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function ( ) {
            var result = prefix + seq;
            seq += 1;
        }
    };
};

var seqer = serial_maker( );
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym( ); // Q1000

// MEMOIZATION
// Generalization of memoize
var memorizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula (recur, n);
            memo[n] = result;
        }
        return result;
    }
    return recur;
}

var fibonacci = memorizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});
