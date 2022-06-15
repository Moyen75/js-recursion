// recursion in javascript

const factorial = (n) => {
    if (n < 0) return 'Please enter a positive number';
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(10));

// const countDown = (n) => {
//     if (n === 0) return;
//     console.log(n);
//     countDown(n - 1);
// }
// countDown(10);