$(document).ready(function () {
    $('#sname,#sclass,#scountry').focus(function () {
        $(this).css('background-color', 'skyblue');
    });
    $('#sname,#sclass,#scountry').blur(function () {
        $(this).css('background-color', 'white');
    });

    $('#sname').select(function () {
        $(this).css('background-color', 'yellow');
    });
    $('#form').submit(function () {
        alert("Submitted");
    });
});