function preferNum(num1, num2, criteria = 'bigger') {
	if (criteria === 'bigger') {
		return Math.max(num1, num2);
	}
	return Math.min(num1, num2);
}

function multiplyBiggerNumByTwo(num1, num2) {
	return preferNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
	return preferNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
	return `I ate ${preferNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
	return `I adopted a dog that weighs ${preferNum(
		weight1,
		weight2,
		'smaller'
	)} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
	multiplyBiggerNumByTwo,
	divideBiggerNumByThree,
	eatMostTacos,
	adoptSmallerDog,
};
