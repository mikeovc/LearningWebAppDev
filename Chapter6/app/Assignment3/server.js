var http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    numbers = [];

app.use(express.static("./client"));
app.use(bodyParser.urlencoded({"extended":"false"}));

http.createServer(app).listen(3000);

app.post("/average", function (req, res) {
    var sum = 0, average;
    numbers = req.body.numberList;

    numbers.forEach(function (number) {
        sum = sum + parseFloat(number);
    });

    average = sum / numbers.length;

    res.json({"answer":average});
});