//making a web page in node.js that lets users upload files.
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type = "file" name = "filetoupload"><br>');
    res.wrtie('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);