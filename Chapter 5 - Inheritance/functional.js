
// Spec -> Contains all the information that the constructor needs to make an instance
// My -> Contains the secrets shared by the constructors in the inheritance chain
var constructor = function (spec, my) {
    var that; // Declare private vars here
    my = my || {}; // Shared variables and functions to my

    that = Object.create({}); // Generate a new object

    // Add methods to that

    return that;
};

var mammal = function (spec) {
    var that = {};

    that.get_name = function ( ) {
        return spec.name;
    };

    that.says = function ( ) {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({ name: 'Herb' });

var cat = function(spec) {
    spec.saying = "Meow";
    var that = mammal(spec);
    that.pur = function (n) {
        return "Purr";
    };
    that.get_name = function ( ) {
        return "I'am the cat " + spec.name;
    };
    return that;
}

var myCat = cat({ name: 'Henrietta' });

Object.method('superior', function (name) {
    var that = this, method = that[name];
    return function ( ) {
        return method.apply(that, arguments);
    };
});

var coolCat = function (spec) {
    var that = cat(spec);
    var super_get_name = that.superior('get_name'); // Equals to that.get_name( ) but for declaration purposes has to be stored before
    that.get_name = function (n) {
        return 'like ' + super_get_name( ) + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({ name: 'Bix' });
var name = myCoolCat.get_name( );

// If the methods does not use that or this (use spec) then the object is *durable*.
