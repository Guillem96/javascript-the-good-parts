// APPLY INVOCATION PATTERN
// Let us construct an array of arguments to use to invoke a function. It also lets us choose the value of this.

var array = [3, 4]
var sum = add.apply(null, array); // sum = 7

var namedObj = {
    name: "Terry"
}

// namedObj does not inherit from Animal, but we can invoke get_name method on namedObj even though namedObj does not have it
var name = Animal.prototype.get_name.apply(namedObj);
document.writeln(name);