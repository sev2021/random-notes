var webCode = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>The Page Returned by Making Http Call to Node.js</title>
    <style type="text/css">
        table, td {
          border:double;
        }
    </style>
</head>
<body>
    <h1>Product Information Page</h1>
    <table>
        <tr>
            <td>Product Id:</td>
            <td>
                <input type="text" />
            </td>
        </tr>
        <tr>
            <td>Product Name:</td>
            <td>
                <input type="text" />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="button"  value="Save"/>
            </td>
        </tr>
    </table>
 
 
</body>
</html>`

var http= require('http');
var os = require('os');
var server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": 'text/html'});  // must be html or not rendered
    res.end(webCode);
});
server.listen(8080, "127.0.0.1");  // "127.0.0.1" is optional
