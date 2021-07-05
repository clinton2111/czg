$(document).ready(function () {
    if ($(window).width() > 993) {
        resizeCol('.section_1');
        resizeCol('.section_2');
        $(window).resize(function () {
            resizeCol('.section_1');
            resizeCol('.section_2');
        });
    }
    $("#contactForm").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
        var form = $(this);
        console.log(form.serialize());
        var root = 'http://localhost/czg/';
        $.ajax({
            type: "POST",
            url: root + 'api/insert.php',
            data: form.serialize(),
            success: function (data) {
                data = JSON.parse(data);
                console.log(data); // show response from the php script.
                alert(data.message);
            }
        });
    });
});
var resizeCol = function (identifier) {
    $(identifier).each(function () {
        var $columns = $('.col', this);
        var maxHeight = Math.max.apply(Math, $columns.map(function () {
            return $(this).outerHeight();
        }).get());
        $columns.outerHeight(maxHeight);
    });
};
