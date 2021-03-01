function getvalue(num) {
    var result = document.getElementById("input");
    result.value += num;
}
function clearvalue() {
    var result = document.getElementById("input");
    result.value = "";
}
function result() {
    var result = document.getElementById("input");
    result.value = eval(result.value);
}
