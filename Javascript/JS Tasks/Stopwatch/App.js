// function timer() {
//     console.log("Running");
// }
// setInterval(timer, 1000);


//----------------------------------------------
//----------------------------------------------


// function timer() {
//     console.log("Running");
// }
// setTimeout(timer, 5000);


//----------------------------------------------
//------------- Counter ----------------------//
//----------------------------------------------


// var count = 0;
// var interval;
// function timer() {
//     count++;
//     console.log(count);
// }
// interval = setInterval(timer, 1000);
// function Clear() {
//     clearInterval(interval);
// };
// setTimeout(Clear, 10000);

var min = 0;
var sec = 0;
var msec = 0;

var mininterval = document.getElementById("min");
var secinterval = document.getElementById("sec");
var msecinterval = document.getElementById("mili");

var interval;

function timer() {
    msec++;
    msecinterval.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secinterval.innerHTML = sec;
        msec = 0;
        if (sec >= 60) {
            min++;
            mininterval.innerHTML = min;
            sec = 0;
        }
    }
}
function start() {
    interval = setInterval(timer, 10);
}

function stop() {
    clearInterval(interval);
}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    mininterval.innerHTML = min;
    secinterval.innerHTML = sec;
    msecinterval.innerHTML = msec;
    clearInterval(interval);
}

