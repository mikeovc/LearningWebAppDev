/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    var addCommentFromInputBox = function (userId) {
        var $newComment;
        var inputText;

        if ($('.comment-input #' + userId + '-input').val() !== '') {
            $newComment = $('<p class=\'' + userId + '-output\'>');
            inputText = $('.comment-input #' + userId + '-input').val();
            $newComment.text(inputText);
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input #' + userId + '-input').val('');
        }
    };

    $('.comment-input button').on('click', function () {
        switch (this.id) {
            case 'user1-button':
                addCommentFromInputBox('user1');
                break;
            case 'user2-button':
                addCommentFromInputBox('user2');
                break;
        }
    });

    $('.comment-input input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            switch (this.id) {
                case 'user1-input':
                    addCommentFromInputBox('user1');
                    break;
                case 'user2-input':
                    addCommentFromInputBox('user2');
                    break;
            }
        }
    });
};

$(document).ready(main);
