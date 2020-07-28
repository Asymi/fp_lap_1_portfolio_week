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


// Initialise array of objects with {title: "", body:"", image:""}
// const posts = [{title: "My first post", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae felis consectetur, auctor enim non, ultricies ligula. Donec dapibus commodo mattis. Suspendisse potenti. Sed vel risus in arcu consectetur sagittis efficitur in risus. Morbi facilisis sem et eros efficitur molestie. Pellentesque eget neque eros. Donec scelerisque consequat interdum. Maecenas ultrices vestibulum purus, in dignissim nibh ultricies a. Proin mattis neque orci. Phasellus nibh velit, tempor non blandit et, cursus vitae risus. Mauris ut turpis a erat blandit luctus et eu diam. Aliquam consectetur interdum lectus, et ultrices mi dignissim nec. Proin sodales ac justo eget fringilla. Curabitur varius metus tortor, ac mollis quam accumsan viverra. Maecenas fermentum rhoncus rhoncus.", gifUrl: "https://media3.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif?cid=abae41c13l6oh8ya0xa0mrobk6dn2debtrt6ymjuqgnch8r4&rid=giphy.gif"} ]

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