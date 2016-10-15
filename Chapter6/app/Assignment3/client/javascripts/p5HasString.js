/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    $('.btn').on('click', function () {
        var stringList = $('.string-list').val().split(','),
            indexString = $('.string').val(),
            query = {
                'stringList' : stringList,
                'indexString' : indexString
            };

        if (stringList === null || stringList.length === 0) { return; }
        if (indexString === null || indexString === '') { return; }

        $.post('/has-string', query, function (response) {
            $('.output').val(response.answer);
        });

        $('.string-list').val('');
        $('.string').val('');
    });
};

$(document).ready(main);