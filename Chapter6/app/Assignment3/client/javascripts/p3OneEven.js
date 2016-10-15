var main = function () {
    "use strict"

    $(".submit-btn").on("click", function () {
        var numbers = $(".number-list").val().split(",");

        if (numbers == null || numbers.length === 0) { return; }

        $.post("/one-even", {"numberList":numbers}, function (response) {
            $(".output").val(response.answer);
        });

        $(".number-list").val("");
    });
};

$(document).ready(main);