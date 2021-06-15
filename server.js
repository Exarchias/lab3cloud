var express = require('express')
var app = express()


var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
var MAX_LENGTH_WORD = 11;

app.post('/getWordLengthFrequency', function (req, res) {
	console.log("post requested received with data: ");
    
    var data = req.body.data;
    //MAX_LENGTH_WORD = data.length;
    
    console.log(data);
    //result.fill(0);   
    var result2 = data.split(" ");
    var result = new Array(MAX_LENGTH_WORD);
    result.fill(0); 
    
    //var resultStr = "";

    for (var i = 0; i < result2.length; i++) {
        //resultStr = resultStr + result[i] + " ";
        var word = result2[i];
        var index = word.length;
        console.log(word + ":" + index);
        result[index] = result[index] + 1;
    }

    var resultStr2 = "";

    for (var i = 0; i < MAX_LENGTH_WORD; i++) {
        resultStr2 = resultStr2 + result[i] + " ";
    }
  
    console.log("sending response");
    res.send(resultStr2);
    res.end();
 
})

app.listen(SERVER_PORT, () => {
	console.log("Server listening on port: " + SERVER_PORT);
})