$(document).ready(function () {

    //single click
    $('#box').click(function () {
        $('#box').css('background-color', 'lime');
    });

    //double click
    $('#box').dblclick(function () {
        $('#box').css('background-color', 'pink');
    });

    //contextmenu click
    $('#box').contextmenu(function () {
        $('#box').css('background-color', 'yellow');
    });

    //mouseenter click
    $('#box').mouseenter(function () {
        $('#box').css('background-color', 'orange');
    });

    //mouseleave click
    $('#box').mouseleave(function () {
        $('#box').css('background-color', 'teal');
    });
});