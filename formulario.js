const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8000;

let crearServidor = (puerto) => {
    http.createServer((request, response)=> {
        let filePath = request.url;
        if (filePath == '/') {
          filePath = '/Formulario.html';
        }
        filePath = __dirname+filePath;
        fileExtension= path.extname(filePath);
        switch (fileExtension) {
            case ".css":
                contentType = "text/css";
            break;
            case ".js":
                contentType = "text/javascript";
            break;
            case ".jpg":
                contentType = "img/jpg";
            break; 
            case '.png':
                contentType = 'img/png';
            break;
            case ".html":
                contentType = "text/html";
            default:
                contentType = "text/html";
        }
        fs.readFile(filePath,{encoding:"UTF-8"}, (error,content)=>{
            if(!error) {
                response.writeHead(200, {"Content-Type": contentType});
                response.write(content);
                response.end();
            } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("error file");
            response.end();
            }
        })
    }).listen(puerto);
};

crearServidor(8000);