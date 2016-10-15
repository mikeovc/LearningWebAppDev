var http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    numbers = [];

app.use(express.static("./client"));
app.use(bodyParser.urlencoded({"extended":"true"}));

http.createServer(app).listen(3000);

app.post("/average", function (req, res) {
    numbers = req.body();
    console.log(numbers);

    var sum = 0, average;

    numbers.forEach(function (number) {
        sum = sum + number;
    });

    average = numbers.length;

    res.json({"answer":average});
});