# REACTO & Big O notation

## REACTO

- R - Restate
  - rephrasing the question in your own words
  - make sure you fully understand the question
- E - Examples
  - representative of inputs and outputs
  - 3-5 examples
  - WRITE THEM DOWN
  - make each example unique in some way
  - consider edge cases (inputs that are not very common)
  - consider errors
- A - Approach
  - come up with at least one conceptual solution
  - use pseudocoding to make a step by step solution
  - DON'T CODE YET
  - you can pass an interview by only getting through this step
- C - Code
  - translate your approach into working code
  - DO THE STEPS Code AND Test TOGETHER
- T - Test
  - TEST AS YOU GO
  - use ecamples from the Examples step
  - ensure your code works for all examples
- O - Optimize
  - only if your code works
  - is there a more concise way to write this code?
  - are there built-in methods that can help?
  - does your code make sense to other devs?
  - big O notation

## Big O notation

- how many computations a function will complete based on the size of an input, NOT how long in seconds
- worst case scenario

Constant -> O(1)

- always the same amount of computations
- just setting variables and a return

Linear -> O(n)

- computations grow proportionally to the size of the input
- for loop

Logarithmic -> O(log(n))

- grows at a slower pace than linear (generally the amount of operations get cut in half each time)
- binary search

Quadratic -> O(n^2)

- grows at a quadratic pace
- for loop within a for loop
