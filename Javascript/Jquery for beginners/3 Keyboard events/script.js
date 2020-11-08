$(document).ready(function () {

    // $('body').keypress(function () {
    //     $('span').css('color', 'orange');
    // });

    $('body').keyup(function () {
        $('span').css('color', 'green');
    });

    $('body').keydown(function () {
        $('span').css('color', 'lightgreen');
    });
});