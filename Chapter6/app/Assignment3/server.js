var http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.use(express.static("./client"));
app.use(bodyParser.urlencoded({"extended":"false"}));

http.createServer(app).listen(3000);

// Problem 1
app.post("/average", function (req, res) {
    var sum = 0, average;

    req.body.numberList.forEach(function (number) {
        sum = sum + parseFloat(number);
    });

    average = sum / req.body.numberList.length;

    res.json({"answer":average});
});

// Problem 2
app.post("/largest", function (req, res) {
    var largest = parseFloat(req.body.numberList[0]);

    req.body.numberList.forEach(function (number) {
        if (parseFloat(number) >= largest) {
            largest = number;
        }
    });

    res.json({"answer":largest});
});

// Problem 3
app.post("/one-even", function (req, res) {
    var hasEven = false;

    req.body.numberList.forEach(function (number) {
        if (parseInt(number) % 2 === 0) {
            hasEven = true;
            // break;
        }
    });

    res.json({"answer":hasEven});
});

// Problem 4
app.post("/all-even", function (req, res) {
    var allEven = true;

    req.body.numberList.forEach(function (number) {
        if (parseInt(number) % 2 !== 0) {
            allEven = false;
            // break;
        }
    });

    res.json({"answer":allEven});
});

// Problem 5
app.post("/has-string", function (req, res) {
    var containsString = false;

    req.body.stringList.forEach(function (string) {
        if (req.body.indexString == string) {
            containsString = true;
        }
    });

    res.json({"answer":containsString});
});

// Problem 6
app.post("/has-string-repeated", function (req, res) {
    var occurances = 0;

    req.body.stringList.forEach(function (string) {
        if (req.body.indexString == string) {
            occurances++;
        }
        // break ofter occurances = 2;
    });

    if (occurances >= 2) {
        res.json({"answer":true});
    } else {
        res.json({"answer":false});
    }
});