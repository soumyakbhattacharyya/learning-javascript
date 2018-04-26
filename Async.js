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
// promise has following states pending, fulfilled and rejected
// a promise starts in pending state
// it moves into fulfilled state if resolution happen immediately
// it moves into wait state if it is suppose to resolve another chained promise
// it moves into reject state if it gets into error situation
// after a promise is fulfilled or rejected it's value can never be changed


// chainging promise

var deploymentSequence = Promise.resolve(slowFunction())
                                .then(function(output){output += " binary-downloaded "; console.log(output); return output;})
                                .then(function(output){output += " copied to server "; console.log(output); return output;});

// promise api
// new Promise(function(resolve, reject){resolve(resolvableFunction); reject(onError)}) : creates new promise
// promise.then(function(resolvedVal){}) : in case the promise resolves this gets executed
// promise.catch(onRejected) : in case a promise is rejected catch api accepts the callback which needs to be invoked in this situation
// Promise.resolve(function(){}) & Promise.reject(function(){}) : convinient methods which accepts functions that are being invoked on resolve and rejected

// concept deepdive 

// :: event loop ::

// All execution environments has a mechanism in them that handles executing multiple chunks of your program over time.
// This mechanism invokes JS engine. The mechanism is being called the "event loop."
// In other words, the JS engine has had no innate sense of time, but has instead been an on-demand execution environment for any arbitrary snippet of JS. 
// It's the surrounding environment that has always scheduled "events" (JS code executions).

// `eventLoop` is an array that acts as a queue (first-in, first-out)
// following snippet demonstrates a basic implementation of event queue
function Event(name) {this.name = name;}
var eventLoop = [];
eventLoop.push(new Event("first"));
eventLoop.push(new Event("second"));

// keep going "forever"
while (true) {
	// perform a "tick"
	if (eventLoop.length > 0) {
		// get the next event in the queue
		var event = eventLoop.shift();

		// now, execute the next event
		try {
			console.log("executing " +event.name);
		}
		catch (err) {
			reportError(err);
		}
	}
}

// :: parralal threading ::
// parallel threading is accomplished via the concept of process and threads
// multiple threads can share the memory space of a process
// on contrary event loop ensures that tasks are executed in sequence such that there is a serial access to shared memory

// JS never share data accross threads. However, if two asyncrounous funcntions mutates same variable, the outcome is non - deterministic

// :: run to completion ::
// whenever a function starts, it continues till it get resolved. it is not possible to pause an function execution


// :: concurrency ::
// concurrency is a process level parallelism
// Concurrency is when two or more chains of events interleave over time, such that from a high-level perspective, 
// they appear to be running simultaneously (even though at any given moment only one event is being processed).

// :: non - interacting ::
// when two processes execute without interfaring with each other they are termed non - interacting

// :: callback ::

