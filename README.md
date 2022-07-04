# random-notes
Random notes from web

  How to pass "this" parameter to event listener?
  Simplest solution ever:


    <div>CLICK ME</div>
    <script>
        function function_name() {this.style.color = "red";}  //dont use arrow here
        document.querySelector("div").addEventListener("click", functon_name)
    </script>
  
  AddEventListener to multiple elements:
  
      document.querySelectorAll("div").forEach(
        item => item.addEventListener("click", functon_name
      );

  Node / Electron html server:
  
      const express = require('express');
      const app = express();
      app.get('/', (req,res) => {res.send("<p>para</p>")});
      app.get('/home', (req,res) => {res.send("<p>home</p>")});
      app.listen(3000);
      
  Asynchronous Node in action ( '.' = __dirname = process.cwd() ):
  
      function asyncFunc (error, files) { console.log(files); };
      require('fs').readdir('.', asyncFunc);
      
  ...or
  
      require('fs').readdir('.', (error, files) => { console.log(files); });
      // With parameters (error, files) are called error-first callback
      
  It works from Node terminal (must have calback element ()=>{}):
  
      require('fs').mkdir("dir_name', ()=>{});
      fs.readdir('.', console.log);
      fs.readFile('aa.txt', (err, data)=>{var fileData = data.toString();})
      
  Two ways of reading files (big files):  
  \- Synchronous file reading is resource consuming (CPU, RAM) and limitted to 512MB (0x1fffffe8 characters):
  
      fs.readFile('aa.txt', (err, x)=>{console.log(x.toString());})
      
  \- Asynchronous file reading streams data line after line, without any limits:
  
      var inpu = fs.createReadStream('qq.txt');
      require('readline').createInterface(inpu).on('line', console.log);
  
      
