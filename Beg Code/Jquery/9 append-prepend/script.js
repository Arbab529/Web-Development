$(document).ready(function () {
    $('#addbtn').on({
        "click": function () {
            $('p').append('<h1>Hello World</h1>');
        },

    });
    $('#removebtn').on({
        "click": function () {
            $('p').prepend('<h1>Hello World</h1>');
        },

    });
    // $('#removebtn').click(function () {
    //     $('#addbtn').off('mouseenter');

    // });
});