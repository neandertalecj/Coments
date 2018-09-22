const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

const app = express();

app.use(express.static('public'));

// app.get('/coment', (req, res) => res.sendFile(__dirname + './content.txt'));

// parse application/json
app.use(bodyParser.json());

app.post('/coment', (req, res) => {
	console.log(req.body);
  fs.writeFile('coment.txt', req.body.text, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
  fs.readFile('coment.txt', 'utf8', (err, data) => {
    console.log(data)

    res.send(JSON.stringify({text:data}));
  });

	// res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
