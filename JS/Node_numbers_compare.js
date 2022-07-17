// find highest number of random inputs
var inpArr = [];
var arrInd = 0;
var topArr = 0;

console.log("Enter number " + arrInd);
process.stdin.on('data',  data => {
	if(+data.toString() == 0) { 
		console.log("\nInput end.");
		process.stdin.destroy() 
	}
	
	else {
		inpArr[arrInd] = +data.toString();
		if(inpArr[arrInd] > inpArr[arrInd - 1]) topArr = arrInd;	
		console.log("Highest number is: " + inpArr[topArr]);
		arrInd ++;
	
		console.log("\nEnter number " + arrInd);
	}
});
