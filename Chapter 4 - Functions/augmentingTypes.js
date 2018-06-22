Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

// Getting the integer part in JS is a bit ugly
// Using the method described previously we can get the integer part of a Number using a brand new beautyfull method
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

// JS lacks a method that removes spaces from the end of a string
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
});