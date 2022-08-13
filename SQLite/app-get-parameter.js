const http = require('http');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

// control SQL requests form JS:

for(var year=2000; year<2005; year++){
	console.log(year);		// printed in correct order - synchronous
	
	db.all("SELECT * FROM temperaturedata WHERE year = $yr",  // $yr is JS parameter
	{ $yr: year },			// $yr paramete controlled by JS
	console.log);			// printed asynchronous way - not always in order!!
}

const server = http.createServer((req, res) => {
	res.end(`<p>IP: ${ req.socket.remoteAddress }</p>`);
});

server.listen(process.env.PORT || 3000);
