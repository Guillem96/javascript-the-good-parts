
// FUNCTION INVOCATION PATTERN
// When a function is not a property of an object
var add = function (a, b) { return a + b; }

var sum = add(3, 4); // 7

// When this pattern is applyed, *this* is bound to global object (mistake of js)
var nestedFunctions = {
    value : 1,
    double : function () {
        // This is bounded to nestedFunction object
        var that = this; // That by convention

        var helper = function () {
            // This is bounded to global object (Bad design, where the mentioned mistake shines)
            // Now we can use that as if it was this
            that.value = add (that.value, that.value); // that as this
        }

        helper();
    }
}

nestedFunctions.double();
document.writeln(JSON.stringify(nestedFunctions)); // 2
