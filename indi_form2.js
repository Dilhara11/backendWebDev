const http = require('http');

const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if(req.method == "POST"){
        let body = '';

        req.on('data', chunk =>{
            body += chunk;
        });
        
        req.on('end', () => {
            const parsedBody = querystring.parse(body);

            res.writeHead(200, {"content-type":"text/html"});

            res.end(`Hello!, ${parsedBody.name}, your are ${parsedBody.age} years old and your email is ${parsedBody.email}`);
        });
    } else {
        res.writeHead(200, {"content-type":"text/html"});

        res.end(`<!DOCTYPE html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <title>Node.js Form Example</title>
             </head>
             <body>
                 <form method="POST">
                     Name: <input type="text" name="name" placeholder="Enter your name">
                     <br>
                     Age: <input type = "number" name = "age" placeholder = "eg: <em>17<em>">
                     <br>
                     Email: <input type = "email" name = "email" placeholder = "example@gmial.com">
                     <input type="submit" value="Submit">
                 </form>
             </body>
             </html>`);
    }
});

server.listen(3000, () => {
    console.log("Server is runnig at http://localhost:3000");
});