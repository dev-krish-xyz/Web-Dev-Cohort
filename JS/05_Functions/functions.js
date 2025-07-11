// IIFE function: immediatedly invoked function expression, a function which runs immediately after it is defined

(function() {
  // code here runs immediately
  console.log("IIFE executed");
})();

(() => {
  console.log("Arrow IIFE executed");
})();

// why it is used ?

// Avoid polluting the global scope.
// Create a private scope.
// Used in module patterns, closures, or legacy scripts.



