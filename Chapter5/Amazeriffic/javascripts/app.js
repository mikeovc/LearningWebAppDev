var main = function (toDoObjects) {
    "use strict";

    var toDos = toDoObjects.map(function (toDo) {
        return toDo.description;
    });

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
                // Reorgnaize todos.json into a map that flips
                // the key and value, with each object in the
                // todo.tag holding its own descriptor
                var tags = [];

                toDoObjects.forEach(function (toDo) {
                    toDo.tags.forEach(function (tag) {
                        // Check to make sure it's not already in tags[]
                        if (tags.indexOf(tag) === -1) {
                            tags.push(tag);
                        }
                    });
                });

                var tagObjects = tags.map(function (tag) {
                    var toDosWithTag = [];

                    toDoObjects.forEach(function (toDo) {
                        if (toDo.tags.indexOf(tag) !== -1) {
                            toDosWithTag.push(toDo.description);
                        }
                    });

                    return { "name": tag, "toDos": toDosWithTag };
                });

                tagObjects.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");


                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });
            } else if ($element.parent().is(":nth-child(4)")) {
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
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});