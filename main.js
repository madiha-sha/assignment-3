"use strict";
//storing a person name in a variable
Object.defineProperty(exports, "__esModule", { value: true });
var personName = "madiha shah";
// printina a person name in lower case
console.log("lowercase:", personName.toLowerCase());
//Printing a person name in uppercase
console.log("Uppercase:", personName.toUpperCase());
//Printing a person name in Titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
