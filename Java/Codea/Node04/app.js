// Error-first callback function.
// Callback does the error handling.
// No need for a try...catch.

const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

// Asynchronous method
api.errorProneAsyncApi('problematic input', errorFirstCallback);
