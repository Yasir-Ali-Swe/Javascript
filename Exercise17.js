let fname = "Yasir";
let lastName = "Ali";
// string concatination method
let fullName = fname.concat(" ", lastName);
console.log(fullName);
// string length method
console.log("Length of string is ", fullName.length);
// string slice method
let sliceString = fullName.slice(2, 8);
console.log("Slice string is ", sliceString);
// string trim method
let text = "   Yasir Ali     ";
console.log("Text is ", text);
console.log("Text after trim method ", text.trim());
// string index method
console.log("String indexOf method ", fullName.indexOf("A", 0));
// string lastIndexOf method
console.log("String lastIndexOf method ", fullName.lastIndexOf("i"));
