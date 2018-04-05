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
// because if a variable is unavailable with an object, JS looks into the prototype object to find the property

console.log(newObj2.newProperty);


// prototype object's constrcutor property points to the function of which it (the object) is the prototype
console.log(doSometing.prototype.constructor);

// creating object using Object function
var newObjByObjectFunc = new Object();
