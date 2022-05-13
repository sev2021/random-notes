# random-notes
Random notes from web

  How to pass "this" parameter to event listener?
  Simplest solution ever:


    <div>CLICK ME</div>
    <script>
        function chColor() {this.style.color = "red";}
        document.querySelector("div").addEventListener("click", chColor)
    </script>
  
