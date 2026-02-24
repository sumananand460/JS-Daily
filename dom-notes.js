// ============================================================
//                  DOM IN JAVASCRIPT — NOTES
//         Document Object Model | Core Concepts & Examples
// ============================================================


// ------------------------------------------------------------
// WHAT IS THE DOM?
// ------------------------------------------------------------
// The DOM (Document Object Model) is a programming interface
// that represents your HTML page as a tree of objects.
// JavaScript can read and manipulate these objects to
// dynamically change content, structure, and styles —
// without reloading the page.
//
// DOM Tree Structure:
//
//   document
//   └── html
//       ├── head
//       │   └── title
//       └── body
//           ├── h1#title
//           └── button#btn


// ------------------------------------------------------------
// 1. SELECTING ELEMENTS
// ------------------------------------------------------------
// Use these methods to grab elements from the DOM.

document.getElementById('myId');           // Select by ID (returns single element)
document.querySelector('.myClass');        // Select first match using CSS selector
document.querySelectorAll('p');            // Select ALL matches (returns NodeList)
document.getElementsByClassName('card');   // Select by class name (returns HTMLCollection)
document.getElementsByTagName('div');      // Select by tag name


// ------------------------------------------------------------
// 2. READING & CHANGING CONTENT
// ------------------------------------------------------------
// Once you have an element, you can read or update its content.

const heading = document.querySelector('h1');

heading.textContent;                        // Read the text content
heading.textContent = 'Hello World';        // Change text (safe, no HTML parsed)
heading.innerHTML;                          // Read inner HTML
heading.innerHTML = '<em>Hello</em>';       // Change HTML inside the element
heading.innerText;                          // Like textContent but respects CSS visibility


// ------------------------------------------------------------
// 3. CHANGING STYLES & CLASSES
// ------------------------------------------------------------
// You can apply inline styles or add/remove CSS classes.

const box = document.querySelector('.box');

// Inline styles (camelCase property names)
box.style.backgroundColor = 'red';
box.style.fontSize = '24px';
box.style.display = 'none';

// Class manipulation
box.classList.add('active');               // Add a class
box.classList.remove('hidden');            // Remove a class
box.classList.toggle('open');              // Toggle (add if absent, remove if present)
box.classList.contains('active');          // Check if class exists (returns true/false)
box.classList.replace('old', 'new');       // Replace one class with another


// ------------------------------------------------------------
// 4. CREATING & INSERTING ELEMENTS
// ------------------------------------------------------------
// You can build new elements entirely with JavaScript.

const newParagraph = document.createElement('p');        // Create a <p> element
newParagraph.textContent = 'I was added by JS!';         // Set its content
document.body.appendChild(newParagraph);                 // Append to end of <body>

// More insertion options:
const parent = document.querySelector('.container');
const child  = document.createElement('div');

parent.appendChild(child);                               // Add as last child
parent.prepend(child);                                   // Add as first child
parent.insertBefore(child, parent.firstChild);           // Insert before a specific child
parent.insertAdjacentHTML('beforeend', '<span>Hi</span>'); // Insert raw HTML at a position
//   positions: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'


// ------------------------------------------------------------
// 5. REMOVING ELEMENTS
// ------------------------------------------------------------

const oldEl = document.querySelector('.old');
oldEl.remove();                                          // Remove the element from the DOM

// Older approach (still works):
oldEl.parentNode.removeChild(oldEl);


// ------------------------------------------------------------
// 6. EVENT LISTENERS
// ------------------------------------------------------------
// React to user interactions like clicks, input, hover, etc.

const btn = document.querySelector('button');

// Basic click event
btn.addEventListener('click', () => {
  alert('Button clicked!');
});

// Event with the event object (gives info about the event)
btn.addEventListener('click', (event) => {
  console.log(event.target);       // The element that was clicked
  console.log(event.type);         // 'click'
  event.preventDefault();          // Prevent default behavior (e.g. form submit)
  event.stopPropagation();         // Stop event from bubbling up to parent elements
});

// Common event types:
// 'click'        — mouse click
// 'dblclick'     — double click
// 'mouseover'    — mouse enters element
// 'mouseout'     — mouse leaves element
// 'keydown'      — key pressed
// 'keyup'        — key released
// 'input'        — value changes in input field
// 'change'       — input loses focus after value change
// 'submit'       — form is submitted
// 'load'         — page/resource finished loading
// 'DOMContentLoaded' — HTML fully parsed (before images/styles load)

// Removing an event listener (must use a named function):
function handleClick() { console.log('clicked'); }
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);


// ------------------------------------------------------------
// 7. READING & SETTING ATTRIBUTES
// ------------------------------------------------------------
// Attributes are things like href, src, alt, data-*, etc.

const link = document.querySelector('a');

link.getAttribute('href');                               // Read an attribute
link.setAttribute('href', '/new-url');                   // Set an attribute
link.removeAttribute('target');                          // Remove an attribute
link.hasAttribute('href');                               // Check if attribute exists (true/false)

// Some attributes have direct properties too:
link.href;                                               // Same as getAttribute('href')
link.id;                                                 // Element's id
link.className;                                          // All classes as a string

// Data attributes (data-*)
const card = document.querySelector('.card');
card.dataset.userId;                                     // Reads data-user-id attribute
card.dataset.userId = '42';                              // Sets data-user-id attribute


// ------------------------------------------------------------
// 8. TRAVERSING THE DOM
// ------------------------------------------------------------
// Navigate between related elements (parent, children, siblings).

const el = document.querySelector('.item');

el.parentElement;                    // Direct parent element
el.children;                         // All child elements (HTMLCollection)
el.firstElementChild;                // First child element
el.lastElementChild;                 // Last child element
el.nextElementSibling;               // Next sibling element
el.previousElementSibling;           // Previous sibling element
el.closest('.container');            // Nearest ancestor matching selector


// ------------------------------------------------------------
// 9. FULL WORKING EXAMPLE
// ------------------------------------------------------------
// A button that changes a heading's text and color on click.
//
// HTML:
//   <h1 id="title">Original Title</h1>
//   <button id="btn">Click Me</button>

const titleEl  = document.getElementById('title');
const buttonEl = document.getElementById('btn');

buttonEl.addEventListener('click', () => {
  titleEl.textContent   = 'Title Changed!';
  titleEl.style.color   = 'steelblue';
  buttonEl.textContent  = 'Clicked!';
  buttonEl.disabled     = true;
});


// ------------------------------------------------------------
// KEY TAKEAWAY
// ------------------------------------------------------------
// The DOM is the live bridge between HTML and JavaScript.
// JS doesn't edit the HTML file — it manipulates the in-memory
// tree of nodes, and the browser re-renders accordingly.
//
// Workflow summary:
//   1. SELECT  — grab the element(s) you need
//   2. READ    — inspect content, attributes, or styles
//   3. MODIFY  — update text, HTML, styles, classes, attributes
//   4. LISTEN  — attach events to respond to user actions
//   5. CREATE  — build and insert new elements dynamically

// ============================================================
//                        END OF NOTES
// ============================================================
