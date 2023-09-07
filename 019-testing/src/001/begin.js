function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function isOdd(n) {
    return n % 2 !== 0;
}

function essayOnTheBestFlavor() {
    return 'grapefruit is super fruit!'
}

function generateGreeting(name) {
    return `Hello, ${name}!`;
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}


module.exports = { sum, mult, isOdd, essayOnTheBestFlavor, generateGreeting, isValidEmail };