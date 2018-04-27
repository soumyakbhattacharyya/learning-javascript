"use strict";

// syntax

//// let declaration - this is a way to bind a variable to the block in which it is being declared

// var a = 2;

// {
//     let a = 3;
//     console.log(a);
// }

// console.log(a);


var funcs = [];

for (var i = 0; i < 5; i++) {
    // i gets declared in the for block
    // IIFE is used to capture the snapshot value.
    // The function declaration thereafter closes on this value
    (function IIFE() {
        var j = i;
        funcs.push(function () {
            console.log(j);
        });
    })();


    console.log("value of i : " + i);
}


funcs.forEach(func => {
    func();
});

// above behaviour is simplified via let keyword
// if you would have used var instead of let, i would have been a global variable
// therefore the final value of i which is 5 would go with the closure

// let should be the first line of a block statement for improved readability

for (let i = 0; i < 5; i++) {
    // i gets declared in the for block

    funcs.push(function () {
        console.log(i);
    });


}


funcs.forEach(func => {
    func();
});

// if a variable which is "let" gets accessed prior to the declaration, Temporal Dead Zone error is being thrown

// {

//     console.log("value of x " + x);
//     let x;
// }

// const declaration


const b = 5;

if (true) {
    const b = 6;
    console.log(b);
}

console.log(b);

// block scoped function

{

    function foo() { console.log(2 + 3); }

}

// foo() // as foo is block scoped, it is not possible for caller to invoke this function outside of the scope


// spread/rest function
// ... is used as spread/rest operator. spreads splits an array and map the elements to variables that a function accepts
// rest will collate all variables into an array

function spreader(x, y, z) {
    console.log(x, y, z);
}

spreader(...[1, 2, 3]);


function rester(...z) {
    console.log(z);
}

rester(1, 2, 3);

// default parameter value

var w = 5
function defaultGuy(x = w + 5, y = x + 9) {
    console.log(x, y);
}

defaultGuy();

// additionally, it is possible to compute the default value by invoking a function as shown below
function anotherDefaulter(x = bar(w)) { console.log(x); }
function bar(anything) { return anything + " food items"; }
anotherDefaulter();

// destructuring
// with this the return value maps neatly as a json/array element
function destructuringDemo() {
    return {
        "a": "valueOfA",
        "m": "valueOfM"
    };
}

// var outcome = destructuringDemo();

// console.log(outcome.a);

// object property assignment pattern

// 1. if object property of the returned object maches to that of outcome, it is possible to use a simpler notation
 var { a: abc, m: m } = destructuringDemo();
// same effect
// var { a, m } = destructuringDemo();

console.log(abc, m);

// Note: {"a":"value"} is a target:source declaration, however destrucuring works opposite, there source:target is the way to go




