Array.dim = function (dimensions, initial) {
    var a = [], i;
    for (i = 0; i < dimensions; i++)
        a[i] = initial;
    return a;
};

// Create an array of length 10 filled with 0
var myArray = Array.dim(10, 0);

// Create a matrix js
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for(i = 0; i < m; i++) {
        a = [];
        for(j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Reduce method for JS
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f (this[i], value);
    }
    return value;
});

// Check if an object is an array
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]'; // Mother of god O_O
}
