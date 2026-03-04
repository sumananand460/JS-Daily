// Creating a stopwach using JavaScript

let startTime, endTime;
function start() {
    startTime = new Date();
    console.log("Stopwatch started...");
}

function stop() {
    endTime = new Date();
    let elapsedTime = (endTime - startTime) / 1000;
    console.log(`Stopwatch stopped. Elapsed time: ${elapsedTime} seconds.`);
}

// Example usage:
start();
// Do some tasks here...
setTimeout(stop, 3000); // Stop after 3 seconds


