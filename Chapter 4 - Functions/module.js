// Functions + closure => Module
// Making modules using functions we can mitigate the use of global variables

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}

String.method('deentityify', function ( ) {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    return function ( ) {
        return this.replace(/&([^&;]+);/g, function (a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        });
    };
}( ));

document.writeln('&lt;&quot;&gt;'.deentityify( ));

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