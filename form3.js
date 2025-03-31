const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const parseBody = querystring.parse(body);
            const email = parseBody.email;

            // simple validation
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if(emailRegex.test(email)){
                res.writeHead(200, {"content-type": "text/html"});
                res.end(`Valid Email: ${email}`);
            }else{
                res.writeHead(200, {"content-type":"text/html"});
                res.end('Invalid Email Format.');
            }
        });
    }else{
        res.writeHead(200, {"content-type": "text/html"});
        res.end(`
            <html lang = "en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form3</title>
            </head>
            <body>
            <form method = "POST">
                Email: <input type = "email" name = "email">
                <input type = "submit" value = "submit">
            </form>
            </body>
            </html>
            `);
    }
});

// now lets start and listen to server
server.listen(3001, () => {
    console.log("server is running at http://localhost:3001");
});