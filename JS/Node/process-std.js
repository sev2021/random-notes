// Node process.stdin.on, process.stdout.write test
process.stdin.on('data', (userBuffer)=>{
    var userString = userBuffer.toString().trim();
    if("qQ".includes(userString)) process.exit(1); // press q to finish

    var userList = userString.split(" ");
    if(userList.length>2){  // for three numbers
        var A = userList[0]
        var B = userList[1]
        var C = userList[2]
        var outString = "";

        for(var i=1; i<=C; i++){
            outString += {0:i, [i%A]:"F", [i%B]:"B", [i%(A*B)]:"FB"}[0];
            outString += " ";
        }
    }
    process.stdout.write(outString);
    process.stdout.write("\n");

})
