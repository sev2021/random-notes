// preliminary snipped for data compartion
// Arrays

function areEqual(x, y){
	if(x.length != y.length){return false};
	
	let indSum = 0;
	
	x.forEach(e => {
		indSum += y.indexOf(e);
		console.log(indSum);
	});
	if((x.length * (x.length - 1) / 2) == indSum) {return true};
	return false;
}

// TEST below

console.log(areEqual([3,4],[4,3]))
console.log(areEqual([3,14],[4,3]))
console.log(areEqual([3,42,5],[5,42,3]))
console.log(areEqual([3,3,5],[3,5,21]))
console.log(areEqual([3,42,13,23],[3,23,13,42]))
