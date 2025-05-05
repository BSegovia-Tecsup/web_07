require('dotenv').config();
const http = require('http');

function requestController(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bienvenidos al curso\n');
}

console.log('Bienvenidos al curso');

const server = http.createServer(requestController);

// Usar el puerto proporcionado por Render o el valor de .env
const PORT = process.env.PORT || 4000;

server.listen(PORT, function() {
  console.log("Aplicación corriendo en: " + PORT);
});
