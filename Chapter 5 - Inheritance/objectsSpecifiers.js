var myObj = maker(f, l, m, c, s);

// Better because order does not matter at all
var myObj = maker({ // Also useful when working with JSON
    first: f,
    last: l,
    middle: m,
    state: s,
    city: c
});