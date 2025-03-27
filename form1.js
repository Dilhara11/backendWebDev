// first import http module to create webserver
const http  = require('http');

// import querystring module to parse the form data
const querystring = require('querystring');

// now create a server using http module 
const server = http.createServer((req, res) => {
    // check if the req method is post
    if(req.method == 'POST'){
        // creating variable to hold and accumilate data chunks
        let body = '';
        //then listen to the data chunks beign recieved in the request body 
        req.on('data', chunk => {
            // collecting chunks
            body += chunk;
        });
        // when the all the data recieved process the chunck
        req.on('end', () => {
            // parse the accumilated body string to the object  
            const parsedBody = querystring.parse(body);
            // Set HTTP response headers; 200 means OK, and content type is HTML
            res.writeHead(200, {"content-type" : "text/html"});

            // respond with name 
            res.end(`Hello!, ${parsedBody.name}`);
        });
    } else {
         // If not a POST request, display the HTML form
         res.writeHead(200, { 'Content-Type': 'text/html' });
         // Send an HTML form as the response
         res.end(`
             <!DOCTYPE html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <title>Node.js Form Example</title>
             </head>
             <body>
                 <form method="POST">
                     Name: <input type="text" name="name" placeholder="Enter your name">
                     <input type="submit" value="Submit">
                 </form>
             </body>
             </html>
         `);
    }

});

// the server listen to the port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});