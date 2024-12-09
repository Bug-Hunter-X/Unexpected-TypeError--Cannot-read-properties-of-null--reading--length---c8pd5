# JavaScript Bug: Handling Null and Undefined Inputs

This repository demonstrates a common JavaScript error: attempting to access the 'length' property of a null or undefined value.

The `bug.js` file contains the buggy code. It attempts to get the length of an input 'x', which may be null.

The `bugSolution.js` file provides a corrected version. It includes proper null checks to prevent the error.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js` (with null or undefined input) to see the error.
3. Run `node bugSolution.js` (with null or undefined input) to see the corrected behavior.

## Lessons Learned

- Always check for null or undefined values before accessing properties of an object.
- Use type checking to ensure that inputs are of the expected type.  
- Proper error handling makes code more robust and less prone to unexpected crashes.