var http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser")
    asg3 = require("./asg3.js"),
    app = express();

app.use(express.static("./client"));
app.use(bodyParser.urlencoded({"extended":"false"}));

http.createServer(app).listen(3000);

// Problem 1
app.post("/average", function (req, res) {
    var average = asg3.findAverage(req.body.numberList);

    res.json({"answer":average});
});

// Problem 2
app.post("/largest", function (req, res) {
    var largest = asg3.findLargest(req.body.numberList);

    res.json({"answer":largest});
});

// Problem 3
app.post("/one-even", function (req, res) {
    var hasEven = asg3.containsEven(req.body.numberList);

    res.json({"answer":hasEven});
});

// Problem 4
app.post("/all-even", function (req, res) {
    var allEven = asg3.hasOnlyEven(req.body.numberList);

    res.json({"answer":allEven});
});

// Problem 5
app.post("/has-string", function (req, res) {
    var containsString = asg3.hasString(req.body.stringList,
                                        req.body.indexString);

    res.json({"answer":containsString});
});

// Problem 6
app.post("/has-string-repeated", function (req, res) {
    var hasStringRepeated = asg3.hasStringAtLeastTwice(req.body.stringList,
                                                       req.body.indexString);

    res.json({"answer":hasStringRepeated});
});