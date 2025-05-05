require('dotenv').config();
const http = require('http');

function requestController(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bienvenidos al curso\n');
}

setInterval(() => {
  console.log('Bienvenidos al curso');
}, 2000); 

const server = http.createServer(requestController);
const PORT = process.env.PORT || 4000;

server.listen(PORT, function() {
  console.log("Aplicación corriendo en: " + PORT);
});
