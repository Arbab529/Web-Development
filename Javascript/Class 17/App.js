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

var count = 0;
var interval;
function counter() {
    count++;
    console.log(count);
}
interval = setInterval(counter, 1000);
function clearcounter() {
    clearInterval(interval);
}
setTimeout(clearcounter, 11000);
