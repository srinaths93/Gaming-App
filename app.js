var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set("port", 3000);
app.post("/app", function (req, res) {
    var operand1 = req.body.operand1;
    var operand2 = req.body.operand2;
    var operation = req.body.operation;
    var answer = req.body.answer;

    if (operation == "add") {
        var result = operand1 + operand2;
    }
    else if (operation == "sub") {
        var result = operand1 - operand2;
    }
    else if (operation == "mul") {
        var result = operand1 * operand2;
    }
    else if (operation == "div") {
        var result = operand1 / operand2;
    }
    if (result == answer) {
        res.send(true);
    }
    else{
        res.send(false);
    }
});
app.listen(app.get("port"), function () {
    console.log("I am on port " + app.get("port"));
});
