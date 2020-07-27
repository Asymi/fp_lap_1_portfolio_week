const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const e = require('express');
app.use(bodyParser.text());
app.use(cors());

const entry = { 
    post: 'Hey'
}

app.get('/', (req, res) => res.send('Hello, client!'))

app.get('/social', (req, res) => {
    res.send('Testing!')
})

// app.post('/social', (req, res) => {
//     res.json(entry);
// })

app.post('/social', (req, res) => {
    // res.send('Made a new entry')
    const newPost = JSON.parse(req.body); 
    entry.push(newPost.name);  
    console.log(entry); 
})

// To do: Get the server running
app.listen(port, () => console.log(`Express now now running from http://localhost:${port}!`))