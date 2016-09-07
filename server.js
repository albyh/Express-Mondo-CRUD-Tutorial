const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db; 

MongoClient.connect('mongodb://admin:tutadmin@ds019856.mlab.com:19856/expersstut', (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(3000, () => {
		console.log("listening on 3000")
	});
});

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	//res.send("response from root");
	//console.log(__dirname);
	res.sendFile(__dirname + '/index.html')
});

app.get("/quotes", (req, res) => {
	console.log("wrong access point... let me help you... redirecting to /")
	res.redirect('/')
})

app.post("/quotes", (req, res) => {
	console.log(req.body)
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);

		console.log('saved to database')
		res.redirect('/')
	})
})

