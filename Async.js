"use strict";

// var cities = ['Tokyo', 'London', 'Boston', 'Berlin', 'Chicago', 'New York'];

// // in this code, the method is being passed as the callback function
// cities.forEach(function methodWhichGetsCalledBack(city) {
// 	console.log(city);
// });

// // syncronous execution of code
// var fs = require('fs');
// var timestamp = new Date().toString();
// var contents;

// // writing to file syncrounously
// fs.writeFileSync('date.txt', timestamp);

// // reading from the file syncrounously
// contents = fs.readFileSync('date.txt');
// console.log('Checking the contents');            // 1
// console.assert(contents == timestamp);           // 2

// console.log('I am the last line of the script'); // 3

// // asyncrounous execution of the file
// var fs = require('fs');
// var timestamp = new Date().toString();

// fs.writeFile('async-date.txt', timestamp, function (err) {
// 	if (err) throw err;

// 	fs.readFile('async-date.txt', function (err, contents) {
// 		if (err) throw err;
// 		console.log('Checking the contents'); // 2
// 		console.assert(contents == timestamp); // 3
// 	});
// });

// console.log('I am the last line of the script'); // 1



var slowFunction = function () {
    for (var i = 0; i < 500; i++) {
        console.log("inside loop");
    }

    //    throw err;
    return 5;
}

// create a new promise object. it takes one resolve and one reject input, if resolves returns without error, function inside then is invoked
// else, if error occures section inside catch executes
var promise = new Promise(function (resolve, reject) {
    resolve(slowFunction());
    reject(0); // Does nothing
});
promise.then(function (number) { console.log('The number is ' + number); }).catch(function (e) { console.log("issue occured"); });

// concept : multiple consumer


var tick = {
    "name": "tick",
    "tickPromise": null,
    getTick: function () {
        if (!this.tickPromise) {
            var promise = new Promise(function (resolve, reject) {
                resolve(Math.random());
                reject(0);
            })
            this.tickPromise = promise;
        };

        return this.tickPromise;
    }
};

var mobileDevice = { "ticker": function (tick) { tick.getTick().then(function (number) { console.log("displaying following tick on mobile device " + number) }) } };
var desktopBrowser = { "ticker": function (tick) { tick.getTick().then(function (number) { console.log("displaying following tick on desktop device " + number) }) } };

mobileDevice.ticker(tick);
desktopBrowser.ticker(tick);


// concept : promise state
// promise has following states pending, resolved, fulfilled and rejected
// a promise starts in pending state
// it moves into fulfilled state if resolution happen immediately
// it moves into resolve state if it is suppose to resolve another chained promise
// it moves into reject state if it gets into error situation
