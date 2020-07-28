const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const e = require('express');
server.use(bodyParser.text());
server.use(cors());

/*
const entry = { 
    post: 'Hey'
}

app.get('/', (req, res) => res.send('Hello, client!'))

app.get('/social', (req, res) => {
    res.send('Testing!')
})
*/
// app.post('/social', (req, res) => {
//     res.json(entry);
// })

// Initialise array of objects with {title: "", body:"", image:""}
const posts = [{title: "My first post", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae felis consectetur, auctor enim non, ultricies ligula. Donec dapibus commodo mattis. Suspendisse potenti. Sed vel risus in arcu consectetur sagittis efficitur in risus. Morbi facilisis sem et eros efficitur molestie. Pellentesque eget neque eros. Donec scelerisque consequat interdum. Maecenas ultrices vestibulum purus, in dignissim nibh ultricies a. Proin mattis neque orci. Phasellus nibh velit, tempor non blandit et, cursus vitae risus. Mauris ut turpis a erat blandit luctus et eu diam. Aliquam consectetur interdum lectus, et ultrices mi dignissim nec. Proin sodales ac justo eget fringilla. Curabitur varius metus tortor, ac mollis quam accumsan viverra. Maecenas fermentum rhoncus rhoncus.", gifUrl: "#"} ]

server.get('/', (req, res) => {
    res.send('Hello');
})

// Write get request that will send posts object to cleint side
server.get('/posts', (req, res) => res.send(JSON.stringify(posts)));

// Route Parameters

// server.get('/posts/:id', (req, res) => {
//     const postTitle = req.params.id;
    
// })

// Write post request that will add a users post to the posts variable
server.post('/posts', (req, res) => {
    const newPost = JSON.parse(req.body); 
    posts.push(newPost);
    res.send(JSON.stringify(newPost)); 
})


<<<<<<< HEAD
=======
const requestListener = function (req, res) {
    res.writeHead(200);
    console.log(`We are live at http://localhost:${port}`);
};
//test
>>>>>>> 772f503dbc5867762ef7256a2c864cf77feb3559

server.listen(port, () => console.log(`We are live at http://localhost:${port}`));
