var main = function () {
    "use strict"

    $(".btn").on("click", function () {
        var numbers = $(".number-list").val().split(",");

        if (numbers == null || numbers.length === 0) { return; }

        $.post("/largest", {"numberList":numbers}, function (response) {
            $(".largest").val(response.answer);
        });

        $(".number-list").val("");
    });
};

$(document).ready(main);