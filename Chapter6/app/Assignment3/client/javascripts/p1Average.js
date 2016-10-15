var main = function () {
    "use strict"

    $(".submit").on("click", function () {
        var numbers = {"numberList" : $(".text").val().split(",")},
            average;
        console.log(numbers);   // remove this later

        $.post("/average", numbers, function (response) {
            console.log(response.answer);
        });

        $(".text").val("");
    });
};

$(document).ready(main);