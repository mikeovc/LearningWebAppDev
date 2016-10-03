var main = function() {
    "use strict";
    var toDos = ["Finish reading this book",
                 "Take Gracie to the park",
                 "Answer emails",
                 "Prep for Monday's class",
                 "Make up some new ToDos",
                 "Get Groceries"];

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element), $content, $button, $input, i;

            $(".tabs span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length - 1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")){
                $content = $("<ul>");
                toDos.forEach(function (toDo) {
                    $content.append($("<li>").text(toDo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                $button = $("<button>").text("+");
                $input = $("<input>");

                $button.on("click", function () {
                    toDos.push($input.val());
                    $input.val("");
                });

                $content = $("<div>").append($input, $button);
            }
            $("main .content").append($content);
            return false;
        })
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);

//TODO: refactor amazerrific for addClass function