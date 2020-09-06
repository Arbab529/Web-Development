$(document).ready(function () {
    $('#addbtn').on({
        "click": function () {
            $('p').addClass('para');
        },
        "mouseenter": function () {
            $('p').css({ "background-color": "pink", "border": "2px solid red", "padding": "10px 20px" });
        }
    });
    // $('#removebtn').click(function () {
    //     $('#addbtn').off('mouseenter');

    // });
});