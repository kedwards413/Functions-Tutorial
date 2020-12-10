var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///
euroToYen(dollarToEuro(137));

var result = euroToYen(dollarToEuro(137));
console.log(result)