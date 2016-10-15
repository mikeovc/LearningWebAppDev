var main = function () {
    "use strict"

    $(".submit").on("click", function () {
        var numbers = {"numberList" : $(".text").val().split(",")},
            average;
        console.log(numbers);   // remove this later

        $.post("/average", numbers, function (response) {
            $(".output").val(response.answer);
        });

        $(".text").val("");
    });
};

$(document).ready(main);