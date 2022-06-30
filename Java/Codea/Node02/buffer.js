// process.stdin.on generatrs buffer as a result
// Parsiong it to string can be a challenge

process.stdin.on('data', (chunk)=>{
    var line = chunk.toString().split(" ");
    var A = line[0];
    var B = line[1];
    var C = line[2];
    var outp="";
    
    for(var i=1; i<C; i++){
        outp += {0:i, [i%A]:"F", [i%B]:"B", [i%(A*B)]:"FB", }[0];
        outp += " ";
    }
    process.stdout.write(outp);
});
