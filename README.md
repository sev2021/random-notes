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
      // A (error, files) is an example of error-first callback
      
  It works from Node terminal (must have calback element ()=>{}):
  
      require('fs').mkdir("dir_name', ()=>{});
      fs.readdir('.', console.log);
      fs.readFile('aa.txt', (err, data)=>{var fileData = data.toString();})
      
