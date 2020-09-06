$(document).ready(function () {
    $('#clonebtn').click(function () {
        $('#box1 p').clone().appendTo('#box2');
        $('#box2').css({ "background-color": "rgb(206, 76, 102)", "padding": "20px" })
    });

});