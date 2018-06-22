// METHOD INVOCATION PATTERN
// When a function is stored as a property of an object, we call it a method.
// When a method is invoked, *this* is bound to that object
var myObj = {
    value : 0,
    increment : function (inc) { // Public method
        this.value += typeof inc === 'number' ? inc : 1;
    }  
};

myObj.increment();
document.writeln(JSON.stringify(myObj)); // 1

myObj.increment(2);
document.writeln(JSON.stringify(myObj)); // 3
