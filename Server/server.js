const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const e = require('express');
app.use(bodyParser.text());
app.use(cors());


app.get('/', (req, res) => res.send('Hello, client!'))

// To do: Get the server running
app.listen(port, () => console.log(`Express now now running from http://localhost:${port}!`))