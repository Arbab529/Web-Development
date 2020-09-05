$(document).ready(function () {
    var a = $('body').text();
    console.log(a);
    var b = $('body').html();
    console.log(b);
    var c = $('p').attr('class');
    console.log(c);

    $('#form').submit(function () {
        var name = $('#myname').val();
        alert(name);
    });


});