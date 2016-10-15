/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    $('.btn').on('click', function () {
        var numbers = $('.number-list').val().split(',');

        if (numbers === null || numbers.length === 0) { return; }

        $.post('/all-even', {'numberList':numbers}, function (response) {
            $('.output').val(response.answer);
        });

        $('.number-list').val('');
    });
};

$(document).ready(main);