const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.on('line', (cmd) => {
	const arr = cmd.split(" ") ;
	arr[0] = arr[0] / 1  ;
	arr[1] = arr[1] / 1 ;
	if( arr[0] > 0 ){
		console.log(arr[0].toString(2).split("").reverse().join("")) ;
		console.log(arr[0].toString(2) )
		const isEq = arr[0].toString(2).split("").reverse().join("") === arr[0].toString(2) ;
		const isEq2 =  arr[1].toString(2).split("").reverse().join("") === arr[1].toString(2) ;
		console.log(isEq && isEq2 ? "YES" :"NO") ;
	}
	// rl.close() ;
});
