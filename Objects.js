"use strict"

function print(printable){
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