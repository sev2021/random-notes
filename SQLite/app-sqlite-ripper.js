const { printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

// selected data for rows above 100:

db.all("SELECT * FROM TemperatureData where id > 100;", (error, rows) => {
  console.log(JSON.stringify(rows));
});
