const http = require('http');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

db.all("SELECT * FROM sqlite_schema", console.log);
db.get("SELECT * FROM temperaturedata", console.log);

const server = http.createServer((req, res) => {
	res.end(`<p>IP: ${ req.socket.remoteAddress }</p>`);
});

server.listen(process.env.PORT || 3000);