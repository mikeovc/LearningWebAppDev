var main = function () {
    "use strict";

    var addCommentFromInputBox = function (userId) {
        var $new_comment;

        if ($(".comment-input #" + userId + "-input").val() !== "") {
            $new_comment = $("<p id=\"" + userId + "-output\">").text($(".comment-input #" + userId + "-input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input #" + userId + "-input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        switch (this.id) {
            case "user1-button":
                addCommentFromInputBox("user1");
                break;
            case "user2-button":
                addCommentFromInputBox("user2");
                break;
        }
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            switch (this.id) {
                case "user1-input":
                    addCommentFromInputBox("user1");
                    break;
                case "user2-input":
                    addCommentFromInputBox("user2");
                    break;
            }
        }
    });
};

$(document).ready(main);
