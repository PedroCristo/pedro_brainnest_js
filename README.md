

`## JS1 - Terminology & Definitions`

### 1. Name the three ways to declare a variable?
#### The three ways to declare a variable in JavaScript are: `var`,`let` and `const`.

### 2. Which of the three variable declarations should you avoid and why?
#### You should avoid using the `var` keyword for variable declarations, as it has functional scope and can lead to unexpected behavior in certain situations. It is recommended to use `let`let or `const` instead.

### 3. What rules should you follow when naming variables?
#### When naming variables in JavaScript, it is important to follow the following rules:
- The name should start with a letter, underscore, or dollar sign.
- The name should only contain letters, numbers, underscores, or dollar signs.
- The name should not be a reserved word.

### 4. What should you look out for when using the + operator with numbers and strings?
#### When using the + operator with numbers and strings, the operator may perform addition or concatenation, depending on the types of the operands. It is important to be mindful of this and to explicitly convert types if necessary.

### 5. How does the % operator work?
#### The `%` operator returns the remainder of dividing the first operand by the second operand.

### 6. Explain the difference between `==` and `===`.
#### The `==` operator performs type coercion before checking equality, while the `===` operator does not perform type coercion and only returns true if the operands are equal in value and type.

### 7. When would you receive a NaN result?
#### A `NaN` result occurs when a mathematical operation cannot be performed, such as dividing `0` by `0`.

### 8. How do you increment and decrement a number?
#### To increment a number, you can use the `++` operator. To decrement a number, you can use the `--` operator.

### 9. Explain the difference between prefixing and post-fixing increment/decrement operators.
#### The prefix increment/decrement operator (`++x, --x`) increments/decrements the value of a variable before it is used in an expression, while the postfix increment/decrement operator (`x++, x--`) increments/decrements the value of a variable after it is used in an expression.

### 10. What is operator precedence and how is it handled in JS?
#### Operator precedence determines the order in which operations are performed in an expression. JavaScript follows a set of rules for operator precedence, and you can use parentheses to explicitly specify the order of operations.

### 11. How do you log information to the console?
#### To log information to the console in JavaScript, you can use the `console.log()` method.

### 12. What does unary plus operator do to string representations of integers?
#### The unary plus operator `+` will convert a string representation of an integer to a number.

### 13. What are the eight data types in JavaScript?
#### The eight data types in JavaScript are: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `object`, and `bigint`.

### 14. Which data type is NOT primitive?
#### The object data type is NOT primitive.

### 15. What is the relationship between null and undefined?
#### `null` and `undefined` both represent absence of a value, but `null` is explicitly set by the programmer, while `undefined` means a variable has been declared but has not been assigned a value.

### 16. What is the difference between single, double, and backtick quotes for strings?
#### Single quotes (`'`), double quotes (`"`), and backticks (`\``) can be used to define strings in JavaScript, but backticks allow for template literals, which can contain expressions.

### 17. What is the term for embedding variables/expressions in a string?
#### The term for embedding variables/expressions in a string is string interpolation.

### 18. Which type of quote lets you embed variables/expressions in a string?
#### Backticks (`\``) allow for template literals and string interpolation in JavaScript.

### 19. How do you embed variables/expressions in a string?
#### To embed variables/expressions in a string using backticks, you wrap the variable/expression in `${}`.

### 20. How do you escape characters in a string?
#### To escape characters in a string, you can use a backslash (`\`).

### 21. What is the difference between the slice/substring/substr string methods?
#### The `slice` method is used to extract a part of a string. It takes two arguments - the starting index and the ending index (non-inclusive). The `substring` method is used to extract a part of a string, similar to the `slice` method. The difference is that `substring` automatically swaps the arguments if the first argument is larger than the second. The `substr` method is used to extract a part of a string. It takes two arguments - the starting index and the length of the substring to extract.

### 22. What are the three logical operators and what do they stand for?
#### The three logical operators are:

- `AND (&&)`
- `OR (||)`
- `NOT (!)`

### 23. What are the comparison operators?
#### The comparison operators are:

- Equal to (==)
- Not equal to (!=)
- Strict equal to (===)
- Strict not equal to (!==)
- Less than (<)
- Less than or equal to (<=)
- Greater than (>)
- Greater than or equal to (>=)

### 24. What are truthy and falsy values?
#### Truthy and falsy values are values that evaluate to either `true` or `false` when used in a `boolean` context.

### 25. What are the falsy values in JavaScript?
#### The falsy values in JavaScript are:

- `false`
- `0`
- `"" (empty string)`
- `NaN`
- `null`
- `undefined`

### 26. What are conditionals?
#### Conditionals are statements that execute a block of code if a certain condition is met.

### 27. What is the syntax for an if/else conditional?
#### The syntax for an if/else conditional is:

```
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```
### 28. What is the syntax for a switch statement?
#### The syntax for a switch statement is:

```
switch (expression) {
  case value1:
    // code to be executed if expression is equal to value1
    break;
  case value2:
    // code to be executed if expression is equal to value2
    break;
  ...
  default:
    // code to be executed if expression does not match any of the cases
    break;
}
```

### 29. What is the syntax for a ternary operator?
### The syntax for a ternary operator is:

```
condition ? expression1 : expression2
```
- The operator returns expression1 if condition is truthy and expression2 if it's falsy.

### 30. What is nesting?
#### Nesting is the practice of placing one control structure inside another. For example, an `if` statement inside an `if` statement.

### 31. What are functions useful for?
#### Functions are useful for encapsulating a block of code that can be invoked multiple times. Functions can also take arguments and return values.

### 32. How do you invoke a function?
#### I can invoke a function by calling its name followed by parentheses `()`.

### 33. What are anonymous functions?
#### Anonymous functions are functions without a name. They are often used as arguments to other functions.

### 34. What is function scope?
#### Function scope is the context in which a function is executed and the variables that are accessible within that function. Variables declared within a function are not accessible outside of it.

### 35. What are return values?
#### Return values are the values that a function returns after it has finished executing. The return value can be used as the result of the function call.

### 36. What are arrow functions?
#### Arrow functions are a shorthand syntax for writing functions in JavaScript. They are anonymous functions that are defined with the "=>" syntax. They allow for more concise function declarations and have a different behavior for the "this" keyword compared to traditional functions. Arrow functions are commonly used for short, one-line functions and for functional programming in JavaScript.

==================================================================================================================================================================

`## JS1 - Terminology & Definitions / JavaScrip 2`

### 1. Why is it important to write clean code?
##### Clean code is important because it makes it easier to understand, maintain and debug. It also improves the readability and reduces the likelihood of bugs.

### 2. What is the difference between good comments and bad comments?
#### Good comments provide context, clarify code and make it easier to understand. Bad comments are redundant, unclear or outdated and can distract from the code.

### 3. What is an array?
#### An array is a collection of values in a single variable.

### 4. What are arrays useful for?
#### Arrays are useful for storing, organizing, and manipulating data.

### 5. How do you access an array element?
#### Array elements can be accessed using their index in square brackets `{}`, e.g. `array[0]` to access the first element.

### 6. How do you change an array element?
#### An array element can be changed by assigning a new value to its index, e.g. `array[0] = "new value"`.

### 7. What are some useful array properties?
#### Some useful array properties include `lengt`,, `slice`, and `conca`.

### 8. What are some useful array methods?
#### Some useful array methods include `push`, `pop`, `shift`, `unshift`, `sort`, and `filter`.

### 9. What are loops useful for?
#### Loops are useful for repeating actions a specific number of times, or while a certain condition is `true`.

### 10.What is the break statement?
#### The `break` statement is used to break out of a loop prematurely, e.g. when a certain condition is met.

### 11. What is the continue statement?
#### The `continue` statement is used to skip a iteration of a loop, e.g. when a certain condition is not met.

### 12.What is the DOM?
#### The DOM (Document Object Model) is a tree-like representation of a webpage that can be manipulated with JavaScript.

### 13.How do you target the nodes you want to work with?
#### Nodes can be targeted using the DOM API (e.g. `querySelector` and `querySelectorAll`) or using JavaScript property accessors (e.g. `element.childNodes`).

### 14.How do you create an element in the DOM?
#### Elements can be created in the DOM using the `document.createElement` method.

### 15.How do you add an element to the DOM?
#### Elements can be added to the DOM using the `element.appendChild` or `element.insertBefore` methods.

### 16.How do you remove an element from the DOM?
#### Elements can be removed from the DOM using the `element.removeChild` or `element.parentNode.removeChild` methods.

### 17.How can you alter an element in the DOM?
#### Elements can be altered in the DOM by changing their properties or styles, such as their text content or class list.

### 18.When adding text to a DOM element, should you use textContent or innerHTML?
#### When adding text to a DOM element, it is generally recommended to use `textContent` as it is faster and more secure than `innerHTML`.

### 19.Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
#### The JavaScript tag should be placed just before the closing `</body>` tag in the HTML file, so that the DOM elements are already created and available for manipulation.

### 20.How do “events” and “listeners” work?
#### Events are actions that occur in the browser, such as a mouse `click` or form submission. Listeners are functions that are triggered when an event occurs, e.g. `element.addEventListener\("click", function() { /* code */ });`.

### 21.What are three ways to use events in your code?
#### Three ways to use events in code are inline event handlers, global event handlers, and event listeners.

### 22.Why are event listeners the preferred way to handle events?
#### Event listeners are preferred because they separate the logic of the event handling from the HTML, making the code easier to maintain and test.

### 23.What are the benefits of using named functions in your listeners?
#### Named functions in listeners are preferred because they are easier to reference in the debugging process and can be reused throughout the code.

### 24.How do you attach listeners to groups of nodes?
#### Event listeners can be attached to groups of nodes using a loop and the `querySelectorAll` method.

### 25.What is the difference between the return values of querySelector and querySelectorAll?
#### The `querySelector` returns the first matching element, while querySelectorAll returns a node list of all matching elements.

### 26.What does a “nodelist” contain?
#### A `nodelist` is a collection of nodes in the Document Object Model (DOM), which can include elements, attributes, and text nodes.

### 27.Explain the difference between “capture” and “bubbling”.
#### `Capture` is a phase of event propagation in which events are passed down from the outermost element to the innermost element. `Bubbling` is a phase in which \events are passed up from the innermost element to the outermost element.

### 28.What is the difference between objects and arrays?
#### Arrays are ordered collections of values, where each value is referenced by an index. Objects are unordered collections of properties, where each property has a name and a value.

### 29.How do you access object properties?
#### Object properties can be accessed using dot notation or bracket notation, for example:
```
object.property
or
object["property"]
```