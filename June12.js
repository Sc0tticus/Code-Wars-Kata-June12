// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
	const numString = String(numbers).split(',').join(''); //"1090439845"
	const first3 = numString.slice(0, 3);
	const second3 = numString.slice(3, 6);
	const last4 = numString.slice(6, 10);

	if (numString.length != 10) {
		return null;
	}

	return `(${first3}) ${second3}-${last4}`;
}

function createPhoneNumber(numbers) {
	numbers = numbers.join('');
	return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}

function createPhoneNumber(numbers) {
	var format = '(xxx) xxx-xxxx';

	for (var i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i]);
	}

	return format;
}

function createPhoneNumber(numbers) {
	return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
