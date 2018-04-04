"use strict";

// for any given function a prototype object gets created
// this object called prototype is available via a special variable named "prototype" associated with function
function doSometing() {

}

// points to the prototype object of the function
console.log(doSometing.prototype);

var newObj1 = new doSometing();
var newObj2 = new doSometing();



if (newObj1.__proto__ === doSometing.prototype){
    console.log("object created using function points to the prototype object of the function via __proto__ property");
} 

if (newObj1.__proto__ === newObj2.__proto__){
    console.log("two objects created from same function share common prototype object");
}

// therefore

newObj1.__proto__.newProperty = "withValue";

// becomes available to newObj2

console.log(newObj2.newProperty);