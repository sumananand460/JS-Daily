/*
============================================================
                JAVASCRIPT TIMERS - DETAILED NOTES
============================================================

WHAT ARE TIMERS?

Timers are functions that allow us to execute code:
1. After a specific delay
2. Repeatedly at fixed time intervals

Timers are asynchronous.
They do NOT block the main thread.

Timers are provided by the runtime environment (Browser or Node.js),
not by core JavaScript itself.

============================================================
                MAIN TIMER FUNCTIONS
============================================================

1) setTimeout()
2) setInterval()
3) clearTimeout()
4) clearInterval()

------------------------------------------------------------
1) setTimeout()
------------------------------------------------------------

DEFINITION:
Executes a function ONCE after a specified delay (in milliseconds).

SYNTAX:
setTimeout(callbackFunction, delayInMilliseconds)

IMPORTANT:
- 1000 milliseconds = 1 second
- Delay is the MINIMUM wait time, not exact guaranteed time
- It runs asynchronously

EXAMPLE 1:
*/

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

/*
EXAMPLE 2: Storing timeout ID
*/

let timeoutId = setTimeout(() => {
    console.log("Delayed execution");
}, 3000);

/*
------------------------------------------------------------
2) clearTimeout()
------------------------------------------------------------

DEFINITION:
Cancels a scheduled timeout before it executes.

SYNTAX:
clearTimeout(timeoutId)

EXAMPLE:
*/

let cancelTimeout = setTimeout(() => {
    console.log("This will NOT execute");
}, 5000);

clearTimeout(cancelTimeout);  // Cancels the timeout

/*
------------------------------------------------------------
3) setInterval()
------------------------------------------------------------

DEFINITION:
Executes a function repeatedly at fixed time intervals.

SYNTAX:
setInterval(callbackFunction, intervalInMilliseconds)

IMPORTANT:
- It keeps running until stopped
- Must use clearInterval() to stop it

EXAMPLE 1:
*/

setInterval(() => {
    console.log("Runs every 1 second");
}, 1000);

/*
EXAMPLE 2: Controlled interval
*/

let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(intervalId);  // Stops after 5 runs
    }
}, 1000);

/*
------------------------------------------------------------
4) clearInterval()
------------------------------------------------------------

DEFINITION:
Stops a repeating interval.

SYNTAX:
clearInterval(intervalId)

Used to:
- Prevent memory leaks
- Stop infinite loops
- Control repeated execution

============================================================
            HOW TIMERS WORK INTERNALLY
============================================================

1) setTimeout/setInterval is called
2) Timer is handled by Web APIs (browser environment)
3) Timer counts down in background
4) After delay completes:
   - Callback moves to Callback Queue (Macrotask Queue)
5) Event Loop checks:
   - If Call Stack is empty
   - Then moves callback to Call Stack
6) Callback executes

IMPORTANT RULE:
Timers run only when Call Stack is empty.

============================================================
            0ms TIMER BEHAVIOR (IMPORTANT)
============================================================

Even if delay is 0, it does NOT run immediately.

Example:
*/

setTimeout(() => {
    console.log("Timer executed");
}, 0);

console.log("Synchronous code");

/*
OUTPUT:
Synchronous code
Timer executed

REASON:
Synchronous code runs first.
Timer callback waits in queue.

============================================================
            DIFFERENCE: setTimeout vs setInterval
============================================================

setTimeout:
- Runs once
- Used for delayed execution

setInterval:
- Runs repeatedly
- Used for repeated tasks

============================================================
            COMMON USE CASES
============================================================

1) Countdown timer
2) Auto-save feature
3) Polling API every few seconds
4) Slideshow animation
5) Delayed notifications
6) Game loops

============================================================
            IMPORTANT NOTES
============================================================

- Timers are asynchronous
- Delay time is minimum wait time
- Heavy synchronous code can delay timer execution
- Always clear intervals when not needed
- Promises (microtasks) execute before timers (macrotasks)

============================================================
            QUICK SUMMARY
============================================================

setTimeout()  -> Runs once after delay
setInterval() -> Runs repeatedly
clearTimeout() -> Cancels timeout
clearInterval() -> Stops interval

Timers rely on:
Call Stack + Web APIs + Callback Queue + Event Loop

They prevent blocking and allow time-based execution.

============================================================
                    END OF NOTES
============================================================
*/