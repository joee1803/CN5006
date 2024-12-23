const calculate = (num, num2, operation) => {
    if (operation === 'sum') return num + num2;
    if (operation === 'product') return num * num2;
    if (operation === 'division') return num / num2;
    if (operation === 'difference') return num - num2;
    return 'Invalid operation';
};

const calculateBODMAS = (num, num2) => {
    const sum = calculate(num, num2, 'sum');
    const product = calculate(num, num2, 'product');
    const division = calculate(num, num2, 'division');
    const difference = calculate(num, num2, 'difference');

    return sum + (product * division) / difference - num;
};

// Example usage:
console.log(calculate(3,5,"sum"));
console.log(calculate(3,5,"product"));
console.log(calculate(3,5,"division"));
console.log(calculate(3,5,"difference"));
console.log(calculateBODMAS(5, 3));