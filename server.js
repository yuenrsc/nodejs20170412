var express = require('express')
var app = express();

app.get('/:date', function(req, res){
    
    var data = req.params.date;
    
    var date;
    
    if (/^[0-9]+$/g.test(data)){
        date = new Date(parseInt(data));
        var date_string = date.toLocaleString('en-US', {
            "month" : "long",
            "day" : "numeric",
            "year" : "numeric"
        });
        res.send({"unix": data, "natural": date_string});
    }else if (!isNaN(date = Date.parse(data))){
        res.json({"unix":date, "natural":data});
    }else{
        res.json({"unix":null, "natural":null});
    }
    
    //res.send(data);
});

app.listen(8080);