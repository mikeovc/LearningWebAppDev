var asg3 = {};

asg3.findAverage = function (numList) {
    var sum = 0;

    numList.forEach(function (number) {
        sum = sum + parseFloat(number);
    });

    return sum / numList.length;
};

asg3.findLargest = function (numList) {
    var largest = parseFloat(numList[0]);

    numList.forEach(function (number) {
        if (parseFloat(number) >= largest) {
            largest = number;
        }
    });

    return largest;
};

asg3.containsEven = function (numList) {
    var hasEven = false;

    numList.forEach(function (number) {
        if (parseInt(number) % 2 === 0) {
            hasEven = true;
            // break;
        }
    });

    return hasEven;
};

asg3.hasOnlyEven = function (numList) {
    var allEven = true;

    numList.forEach(function (number) {
        if (parseInt(number) % 2 !== 0) {
            allEven = false;
            // break;
        }
    });

    return allEven;
}

asg3.hasString = function (stringList, indexString) {
    var containsString = false;

    stringList.forEach(function (string) {
        if (indexString == string) {
            containsString = true;
        }
    });

    return containsString;
}

asg3.hasStringAtLeastTwice = function (stringList, indexString) {
    var occurances = 0;

    stringList.forEach(function (string) {
        if (indexString == string) {
            occurances++;
        }
        // break ofter occurances = 2;
    });

    if (occurances >= 2) {
        return true;
    } else {
        return false;
    }
}

module.exports = asg3;