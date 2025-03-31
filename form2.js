const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if(req.method == "GET" && queryObject.name){
        res.writeHead(200, {"content-type": "text/html"});
        res.end(`Hello!, ${queryObject.name}`);
    }else {
        res.writeHead(200, {"content-type":"text/html"});
        res.end(`
            <html lang= "en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form2</title>
            </head>
            <body>
            <form method = "GET">
            Name: <input type = "text" name = "name">
            <input type = "submit" value = "submit">
            </form>
            </body>
            </html>`
        );
    }

});


// starting/listening to the server
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});