const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')  // Required to initialise JSON for backend

const server = express()
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

// Initilise posts, an array of objects with {title: "", body:"", image:""} from external JSON File. 
const data = fs.readFileSync('data.JSON');
const posts = JSON.parse(data);


server.get('/', (req, res) => {
    res.send('Hello');
})

// Write get request that will send posts object to cleint side
server.get('/posts', (req, res) => res.send(JSON.stringify(posts)));

// Route Parameters

// server.get('/posts/:id', (req, res) => {
//     const postTitle = req.params.id;
    
// })

// Write post request that will add a users post to the posts variable and appends the JSON file
server.post('/posts', (req, res) => {
    const newPost = JSON.parse(req.body); 
    posts.push(newPost);
    console.log(posts)
    let data = JSON.stringify(posts, null, 2);
    fs.writeFileSync('data.JSON', data) 
})



server.listen(port, () => console.log(`We are live at http://localhost:${port}`));      