const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.get('/content', (req, res) => res.sendFile(__dirname + './public/content.txt'));

app.post('/content', (req, res) => {
	fs.writeFile('./public/content.txt', req.body, console.log(req.body));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));