// Fibonacci Sequence Generator
// This program makes the Fibonacci sequence up to 'n' terms.
// The Fibonacci sequence is a series of numbers where:
// - The first number is 0
// - The second number is 1
// - Every number after that is the sum of the two numbers before it.
// Example: 0, 1, 1, 2, 3, 5, 8...

// Step 1: Start with the first two numbers in the sequence
var state1 = 0; // First term (0)
var state2 = 1; // Second term (1)

// Step 2: Decide how many numbers to make
var n = 5; // We want the first 5 numbers

// Step 3: Create an empty list (array) to store the sequence
var fib = []; // This will hold all our Fibonacci numbers

// Step 4: Repeat 'n' times to build the sequence
for (var i = 0; i < n; i++) {
    // Add the current number to the list
    fib.push(state1);

    // Make the next number by adding the last two
    var next = state1 + state2;

    // Move forward in the sequence:
    // - The "second" number becomes the new "first"
    state1 = state2;

    // - The "next" number becomes the new "second"
    state2 = next;
}

// Step 5: Show the sequence in the console
console.log(fib); // Prints: [0, 1, 1, 2, 3]
