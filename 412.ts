function fizzBuzz(n: number): string[] {
    let result: string[] = [];
    for (let currentNumber = 1; currentNumber <= n; currentNumber++) {
        result.push(getFizzBuzzValue(currentNumber));
    }
    return result;
}

function getFizzBuzzValue(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num.toString();
}