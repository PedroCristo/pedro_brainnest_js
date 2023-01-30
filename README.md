

## JS1 - Terminology & Definitions

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
- The `slice` method is used to extract a part of a string. It takes two arguments - the starting index and the ending index (non-inclusive).
The substring method is used to extract a part of a string, similar to the slice method. The difference is that substring automatically swaps the arguments if the first argument is larger than the second.
The substr method is used to extract a part of a string. It takes two arguments - the starting index and the length of the substring to extract.

### 22. What are the three logical operators and what do they stand for?
#### The three logical operators are:

`AND (&&)`
`OR (||)`
`NOT (!)`

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

- if (condition) {
  - // code to be executed if condition is true
- } else {
  - // code to be executed if condition is false
- }

### 28. What is the syntax for a switch statement?

### 29. What is the syntax for a ternary operator?

### 30. What is nesting?

### 31. What are functions useful for?

### 32. How do you invoke a function?

### 33. What are anonymous functions?

### 34. What is function scope?

### 35. What are return values?

### 36. What are arrow functions?