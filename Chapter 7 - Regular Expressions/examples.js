var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);
var names = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
var blanks = "                ";

for (var i = 0; i < names.length; i++) {
    document.writeln(names[i] + ":" + blanks.substring(names[i].length), result[i], "<br>");
}

// (?:([A-Za-z]+):)?
    // ?: Indicates a noncapturing group (The group that will be captured is ([A-Za-z]+)). The ? suffix indicates that it is optional
    // The (...) indicates a capturing group. Copies the text matched and copies it to the result array
    // The [...] indicates a character class. This character class, A-Za-z contains 26 uppercase and 26 lowercase lettters
    // Suffix +, matches one or more times
// (\/{0,3})
    // Capturing group 2
    // \/ indicates that a slash(/) character should be matched. 
    // Suffix {0,3} appears from 0 to 3 times
// ([0-9.\-A-Za-z]+)
    // Capturing group 3, host name
    // One or more digits, letters or . or  -. - has to be escaped with \ in order to not confuse it with a range marker
// (?::(\d+))?
    // The port is optional. Formed with one or more digits. The outside colon is not captured
// (?:\/([^?#]*))?
    // The path. Starts with /
    // Contains all characters except # and ?. In a character class ([...], the character ^ indicates except
    // * means 0 or more times
// (?:\?([^#]*))?
    // Optional group that begins with ?
    // And can contain any character except #
// (?:#(.*))?
    // Begins with # and the . will match any character except a line ending character 
// $ Represents the end of an string


var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
    document.write(parse_number.test(num), "<br>");
}

test('1');
test('number');
test('98.7');
test('132.21.86.100');
test('123.45E-65');
test('123.45D-67');

// /^...$/i
    // ^ string init and $ to match end of string
    // Flag i -> Non case sensitive. e can alse have been written as [eE] or (?:E|e)
// -?
    // Number can start with -
// \d+ 
    // The number must contain at leat one digit
// (?:\.\d*)?
    // (?:...) non capturing group. Sometimes is better using noncapturing groups because captuing ones have a bad performance
    // Optional decimal part
// (?:e[+\-]?\d+)?
    // Optional exponential part starting with e or E
    