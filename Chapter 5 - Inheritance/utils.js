Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

// OO LIKE INHERITANCE
Function.method('inherits', function (Parent) {
    this.prototype = new Parent ( );
    return this;
});

var Cat = function (name) {
    this.name = name;
    this.saying = "Meow";
}

Cat.inherits(Mammal)
    .method('purr', function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += "r"
        }
        return s;
    })
    .method('get_name', function( ) {
        return this.says( ) + ' ' + this.name + ' ' + this.says( );
    });


if (typeof Object.create !== 'function') {
    Object.create = function (o) { // Creates an object which inherits from 'o' object
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}
    