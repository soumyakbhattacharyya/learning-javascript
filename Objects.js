"use strict";

function print(printable) {
    console.log(printable);
}


// instatiating object with literal form
var employee = {
    "name": "Mike",
    "age": 25
};

// instantiating object with Object function
var manager = new Object();
manager.name = "Foo";
manager.age = 36;

print(employee);
print(manager);

// accessing object attribute
// dot notation

print("age of manager is " + manager.age);

// key notation

print("age of employee is " + employee["age"]);

// Note: to qualify to be accessible via dot notation, an attribute has to be an Identifier compatible

// copy is by default shallow

var obj1 = { "length": 5 };

var container1 = { "refObj": obj1 };

var container2 = {};

// copy container 1 to container 2

container2 = container1;

// change container2's content

container2.refObj.length = 8;

// assert obj1's length is now changed

if (obj1.length === 8) {
    print("yes");
}

// property descriptor
var newObj = new Object();
newObj.temperature = 70;
newObj.boilingPoint = 140;

print(Object.getOwnPropertyDescriptor(newObj, "temperature"));

// { value: 70, --> indicates value
//   writable: true, --> indicates if it is possible to overrite the value
//   enumerable: true, --> indicates if this attribute will appear while enumerating over a collection conststing this object
//   configurable: true --> indicates if property descriptor can be modified}


// demonstration of various immutability standards
Object.preventExtensions(newObj);

// can not add new property
// newObj.density = "low";

var newObj1 = { "a": "val1" };

Object.seal(newObj1);

// can not add new property and modify existing property attribute, but change their value
// newObj1.a = 6;

Object.freeze(newObj1);

// hereafter can not add new property, can not modify existing property descriptors or the value 



// get and set example

var myObject = {
    a: undefined
};

print(myObject.a);

print(myObject.b);


var myAnotherObj = {
    // define getter
    get propertyOne() {
        return 8;
    },

    get propertyTwo() {
        return 7;
    },

    propertyThree: "value3"
};

print(myAnotherObj.propertyOne);

// in operator to assert if a property is part of an object 

// if (propertyOne in myAnotherObj) { print("yes"); } // this fails as property is essentially a getter function

if ("propertyThree" in myAnotherObj) { print("this will be yes"); }

// equivalent of above
if (myAnotherObj.hasOwnProperty("propertyThree")) { print("yes again"); }