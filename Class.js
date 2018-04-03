"use strict";

// explicit mixins

// a function which effectively copies sourceObj to targetObj 
function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        // only copy if not already present
        if (!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }

    return targetObj;
}

// vehicle is a super class definition
var Vehicle = {
    engines: 1,

    ignition: function () {
        console.log("Turning on my engine.");
    },

    drive: function () {
        this.toString();
        // console.log("this is a car"+ this.toString()); 
        this.ignition();
        console.log("Steering and moving forward!");
    }
};


// car is mixed in which has additional attribute 'wheels' and overriden definition of drive function
var Car = mixin(Vehicle, {
    wheels: 4,

    // an example of explicit pseudo-polymorphism
    drive: function () { // car's version of drive function. It calls Vehicle's implementation passing Car (this) object. This way, ignition 
        // function can be reused. 
        Vehicle.drive.call(this);
        console.log("Rolling on all " + this.wheels + " wheels!");
    },

    toString: function(){console.log("this is a car");}
});

Car.drive();

// default object initialization

var myObj = {};

console.log(myObj);

var employee = {};
employee.firstName = "John";

// constructor function
function Employee(firstName, lastName){
    // note, first and last lines in comment are inserted 
    // by JS engine if new keyword is being used
    // this = {} // gets initialized
    this.firstName = firstName;
    this.lastName = lastName;

    

    // return this; // this is returned
}

var newEmp = Employee("marshal", "pluto");

// difference between regular function and ctor



