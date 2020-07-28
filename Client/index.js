document.addEventListener("DOMContentLoaded", e => {
    const url = "http://localhost:3000/posts"
    // Grab relevant HTML elements
    const postContainer = document.getElementById("postContainer");

    // Insert previous posts into postContainer
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(insertPost)
        .catch(console.warn);
 

    function insertPost(post){
        const postObject = post 

        let articleHead = document.getElementById("#h2");
        let articleBody = document.getElementById("#p");

        var store = []; 
        for (const elem in postObject) {
            const titles = (postObject[elem].title);
            const bodys = (postObject[elem].body);
            store.push(titles); 
            store.push(bodys); 
        postContainer.textContent +=  titles + bodys ; 

        }
    }
    
    // Upon submit, display user input on current page
    // How do you do this with a callback instead of an arrow function?
    document.addEventListener("submit", e => {
        e.preventDefault();

        // Grab textContent of post title and post body
        // Ensure you use .value to access the input the user makes
        let postTitle = document.getElementById("postTitle").value;
        let postBody = document.getElementById("postBody").value;

        // Update page with new post - create article, h2, and p tags for new post
        let article = document.createElement("article");
        let articleHead = document.createElement("h2");
        let articleBody = document.createElement("p");

        // Populate elements
        articleHead.textContent = postTitle;
        articleBody.textContent = postBody;

        // Append title and body to article
        article.appendChild(articleHead);
        article.appendChild(articleBody);
        postContainer.appendChild(article);
    });

    // Upon submit, send user input to server
    document.addEventListener("submit", e => {
        e.preventDefault();

        let postTitle = document.getElementById("postTitle").value;
        let postBody = document.getElementById("postBody").value;

        // Creating post object to store user post
        let post = {title: postTitle, body: postBody, gifUrl: "#"}

        let options = {
            method: 'POST',
            headers: {
                'ContentType': 'application/json'
            },
            body: JSON.stringify(post)
        }
        
        fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .catch(console.warn);
    });


})


// Add emoji functonality

// Add gif functionality

// Discard button resets title and body