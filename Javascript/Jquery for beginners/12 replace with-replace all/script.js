$(document).ready(function () {
    $('#replacebtn').click(function () {
        $('#box p').replaceWith('Hello World Replaced');
    });
    // $('#replacebtn').click(function () {
    //     $('<h1>Hello World Replaced</h1>').replaceAll('#box');
    // });

});