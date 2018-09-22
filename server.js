const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

const app = express();

app.use(express.static('public'));

app.get('/content', (req, res) => res.sendFile(__dirname + './public/content.txt'));

// parse application/json
app.use(bodyParser.json());

app.post('/content', (req, res) => {
	// fs.writeFile('./public/content.txt', req.body, console.log(req.body));
	console.log(req.body);
	// console.log(JSON.parse(req.body));
	res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
