//length : returns length of a string
let string = "hello";
console.log(string.length);

//charAt: Returns the character at a specified index of a string.

let char= "hello";
console.log(char.charAt(1));


//concat`: Concatenates two or more strings.

let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2));

//indexOf`: Returns the index of the first occurrence of a specified substring within a string.

let str = "hello world";
console.log(str.indexOf("world"));

//slice`: Extracts a section of a string and returns a new string.

let str3 = "hello world";
console.log(str3.slice(0, 5));

//replace`: Replaces a specified substring with another substring.

let str4 = "hello world";
console.log(str4.replace("world", "universe"));


//split`: Splits a string into an array of substrings.

let str5 = "hello world";
console.log(str5.split(" "));
