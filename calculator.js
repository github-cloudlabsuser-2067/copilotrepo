function Calculator() {
    this.add = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };

    this.multiply = function(a, b) {
        return a * b;
    };

    this.divide = function(a, b) {
        if(b == 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
}

var calculator = new Calculator();
console.log(calculator.add(5, 2)); // Outputs: 7
console.log(calculator.subtract(5, 2)); // Outputs: 3
console.log(calculator.multiply(5, 2)); // Outputs: 10
console.log(calculator.divide(5, 2)); // Outputs: 2.5