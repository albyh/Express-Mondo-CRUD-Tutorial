var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
	console.log("listening on 3000")
})

app.get('/', (req, res) => {
	//res.send("response from root");
	//console.log(__dirname);
	res.sendFile(__dirname + '/index.html')
});

app.post("/quotes", (req, res) => {
	console.log("received a post request at /")
})

