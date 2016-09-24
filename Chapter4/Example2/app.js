var main = function () {
    'use strict';

    var addCommentFromInputBox = function (userId) {
        var $newComment;
        var inputText;

        if ($('.comment-input #' + userId + '-input').val() !== '') {
            $newComment = $('<p id=\'' + userId + '-output\'>');
            inputText = $('.comment-input #' + userId + '-input').val();
            $newComment.text(inputText);
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input #' + userId + '-input').val('');
        }
    };

    $('.comment-input button').on('click', function (event) {
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
