/**
 * JavaScript Closures | Pure Logic Demonstration
 * 
 * A closure is the combination of a function bundled together (enclosed) with 
 * references to its surrounding state (the lexical environment).
 */

/**
 * 1. THE CLOSURE FACTORY
 * This function returns a new function. 
 * The inner function "closes over" the 'count' variable.
 */
function createCounter(counterName) {
    let count = 0; // Private variable trapped in the closure

    // This is the closure function
    return function() {
        count++;
        console.log(`[${counterName}] Current Count: ${count}`);
    };
}

/**
 * 2. CREATING INDEPENDENT INSTANCES
 * Even though they come from the same factory, they each carry 
 * their own unique "backpack" (scope).
 */
const counterA = createCounter("Counter A");
const counterB = createCounter("Counter B");

// 3. TESTING PERSISTENT MEMORY
console.log("--- Starting Closure Test ---");

counterA(); // Counter A: 1
counterA(); // Counter A: 2
counterA(); // Counter A: 3

counterB(); // Counter B: 1 (Starts at 1 because it's a separate closure!)
counterB(); // Counter B: 2

counterA(); // Counter A: 4 (Remembers its previous state!)

console.log("--- Test Complete ---");