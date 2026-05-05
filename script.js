/**
 * Example 1: Simple Counter (The "Backpack" analogy)
 */
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Count: ${count}`);
    };
}

const myCounterA = createCounter();
// const myCounterB = createCounter();

myCounterA(); // value of counterA is 1
myCounterA(); // value of counterA is 2
myCounterA(); // value of counterA is 3

// // Counter B will start from 0 because it has its own closure
// myCounterB(); // value of counterB is 1

// // Counter A will continue from 3 because it has its own closure
// myCounterA(); // value of counterA is 4

// // Counter B will continue from 1 because it has its own closure
// myCounterB(); // value of counterB is 2