const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

const app = express();

app.use(express.static('public'));

function readTxt(req, res) {
  fs.readFile('coment.txt', 'utf8', (err, text) => {
    const arrTxt = text.split('<s>').slice(0, -1);
    console.log(arrTxt);
    res.send(JSON.stringify({text: arrTxt}));
  });
}

app.get('/coment', (req, res) => {
  readTxt(req, res);
})

// parse application/json
app.use(bodyParser.json());

app.post('/coment', (req, res) => {
  console.log(req.body);
  let txt = `${req.body.text}<s>`
  fs.appendFile('coment.txt', txt, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
    // Описуємо в колбеку readFile бо АСИНХРОНО... !!!
    readTxt(req, res);
  });
	// res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
