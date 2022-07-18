// preliminary snipped for data compartion
// Arrays + Objects + Objects of arrays

function areEqual(x, y){
	if(x instanceof Array || y instanceof Array){
		if(x.length != y.length){return false};
		
		let indSum = 0;
		
		x.forEach(e => {
			indSum += y.indexOf(e);
		});
		if((x.length * (x.length - 1) / 2) == indSum) {return true};
		return false;
	}
	
	else if(x instanceof Object || y instanceof Object){
		console.log('object ' + Object.keys(x) + "  " + Object.keys(y));	
		if(Object.keys(x).length != Object.keys(y).length){return false};
		
		let fromEach = true;
		Object.keys(x).forEach(e => {
			console.log(x[e] + ".." + y[e] + ".." + (x[e] != y[e]));
			if(String(x[e]) != String(y[e])){  // TRICK TO COMPARE ARRAYS
				fromEach = false;
			}
		});
		return fromEach;
	}
	
	else {return false;}
}

console.log(areEqual([{a:3},{b:4}],[{a:'3'},{b:'4'}])) //  false 
console.log(areEqual({a:[2,3],b:[4]},{b:[4],a:[2,3]})) // true 
console.log(areEqual({adam:3, laura:4},{laura:4, adam:3})) // true; 
console.log(areEqual({adam:3, laura:4, maisie:2},{adam:3, laura:4})) // false 
console.log(areEqual({a:3},{b:4},{b:3},{a:4})) // false
