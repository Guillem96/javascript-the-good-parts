Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

var Mammal = function (name) {
    this.name = name;
};

Mammal.prototype.get_name = function ( ) {
    return this.name;
};

Mammal.prototype.says = function ( ) {
    return this.saying || "";
};

var Cat = function (name) {
    this.name = name;
    this.saying = "Meow";
};

Cat.prototype = new Mammal( );

Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += "r"
    }
    return s;
};

Cat.prototype.get_name = function ( ) {
    return this.says( ) + ' ' + this.name + ' ' + this.says( );
};

var myCat = new Cat("Henrietta");
var says = myCat.says( );
var purr = myCat.purr(5);
var name = myCat.get_name( );

document.write(says + "--" + purr + "--" + name + "<br>")

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