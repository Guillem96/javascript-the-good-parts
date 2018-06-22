var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, aux);
    }
}

hanoi(3, 'Src', 'Aux', 'Dst');

// Define a walk_the_DOM function that visits every node of the tree in HTML source order,
// starting from some given node. It invokes a function passing it each node in turn. 
// walk_the_DOM calls itselg to precess each of the child nodes

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

// Define a fetElementsByAttrubyre function. It takes an attribute name string and an optional matching
// value. It calls walt_the_DOM, passing it a function that looks for an attr name in the node. The matching
// nodes are accumulated in a results array.
var getElementsByAttr = function (attr, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(attr);
        if (typeof actual === 'string' && ( actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};

// JS does not provide tail recursion.
var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};