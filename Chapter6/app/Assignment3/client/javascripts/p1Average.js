/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    $('.submit').on('click', function () {
        var numbers = {'numberList' : $('.text').val().split(',')};

        if (numbers === null || numbers.length === 0) { return; }

        $.post('/average', numbers, function (response) {
            $('.output').val(response.answer);
        });

        $('.text').val('');
    });
};

$(document).ready(main);