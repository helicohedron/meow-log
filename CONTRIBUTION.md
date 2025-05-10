# Contributing Guide

We value your contributions and want to make sure that working together is a smooth and enjoyable experience for everyone. To achieve this, we have set up some coding standards and guidelines. Please take a moment to familiarize yourself with them before contributing.

## General Coding Practices

- **Indentation:** Use 2 spaces for indentation. No tabs or mixing tabs and spaces.
- **Separation of Concerns:** Keep HTML, CSS, and JavaScript separate. HTML files should only contain markup, CSS should be in stylesheets, and scripts in JavaScript files.
- **Semicolons:** All statements must end with a semicolon (`;`).
- **Quotation Marks:** Prefer single quotes (`'`) over double quotes (`"`).
- **Function Design:** Functions should be concise and focus on a single responsibility.

## HTML Guidelines

Referencing Google's HTML and CSS style guide, see more https://google.github.io/styleguide/htmlcssguide.html

- **HTML5 Syntax:** Use HTML5 syntax for all HTML files.
- **Lowercase:** Ensure all HTML code is in lowercase: element names, attributes, attribute values, CSS selectors, and properties.
- **Accessibility:** Provide alternative access for multimedia assets (e.g., `alt` attributes for images).
- **Formatting:** Use a new line for every block, list, or table element and indent every child element appropriately.

## CSS Standards

- **Naming:** Use IDs and class names that are meaningful and reflect the element's purpose.
- **Shorthand Properties:** Utilize shorthand properties to make the code more efficient.
- **Syntax:** Insert a space after a property name's colon (`:`)
- **Efficiency:** Group selectors and properties logically.

## JavaScript Conventions

Following Mozilla's JavaScript guidelines, see more https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

- **ES6 Syntax:** Utilize ES6 syntax wherever possible.
- **Variable Naming:** Use `lowerCamelCase` for variable names, ensuring they are readable, specific, and clearly define the variable's purpose.
- **Variable Declaration:** Use `let` and `const` for variable declarations. Prefer `const` if the variable's value will not be reassigned.
- **Data Structures:** Prefer literals for creating arrays and objects (e.g., `[]` (for array), `{}` (for object)).

## React Best Practices

Adhering to Airbnb's React style guide, see more https://airbnb.io/javascript/react/

- **Component Files:** Only one React component per file.
- **Naming:** Use `PascalCase` for React components and `camelCase` for their instances.
- **File Naming:** Use the component name as the filename.
- **Prop Names:** Always use `camelCase` for prop names.
- **JSX Formatting:** Wrap JSX tags in parentheses (`()`) when they span more than one line.

## NodeJS Recommendation

Following the Startup's guidelines, see more https://medium.com/swlh/node-js-coding-style-guidelines-74a20d00c40b

- **File Ending:** Always end a file with a new line.
- **Naming Conventions:** Use `PascalCase` for class names and `camelCase` for variables.
- **Module Imports:** Place all `required` or `import` at the top of the file.

By following these guidelines, we can ensure our codebase remains clean, efficient, and easy to understand. Happy coding!
