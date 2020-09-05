$(document).ready(function () {
    $('#addbtn').click(function () {
        $('p').addClass('para');
    });
    $('#removebtn').click(function () {
        $('p').removeClass('para');
    });
    $('#togglebtn').click(function () {
        $('p').toggleClass('para');
    });
});