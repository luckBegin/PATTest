const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const sum = ( a , b ) => {
	const _sum = a + b ;
	return _sum.toString().replace( /(?=(?!\b)(\d{3})+$)/g, ',');
};

rl.on('line', (cmd) => {
	const arr = cmd.split(" ") ;
	console.log(sum( arr[0] / 1 , arr[1] / 1 )) ;
	rl.close() ;
});
