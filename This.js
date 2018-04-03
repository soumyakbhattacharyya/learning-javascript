//"use strict";

// this is resolved against the call site of a function
// in below case, this refers to global object which is console/window
function foo() { console.log(this); }
foo();

// in below case, this will resolve to the parent object (function of which has been called)
var functionalObj = {

    "someVar": "someVal",
    "someFunction": function () {
        console.log(this.someVar);
    }

};

functionalObj.someFunction();

// in below case, this will resolve to the newly created object

function ObjectMaker() {
    this.name = "noname";
    this.age = 0;
}

var newObj = new ObjectMaker();

console.log(newObj);

// in below case, as explicit object has been passed via call invocation, this resolves to that object 

var anotherFunctionalObj = {
    "someVar": "aDifferentValue"
}

functionalObj.someFunction.call(anotherFunctionalObj);

