var main = function () {
    "use strict"

    $(".btn").on("click", function () {
        var stringList = $(".string-list").val().split(","),
            indexString = $(".string").val(),
            query = {
                "stringList" : stringList,
                "indexString" : indexString
            };

        if (stringList == null || stringList.length === 0) { return; }
        if (indexString == null || indexString == "") { return; }

        $.post("/has-string", query, function (response) {
            $(".output").val(response.answer);
        });

        $(".string-list").val("");
        $(".string").val("");
    });
};

$(document).ready(main);