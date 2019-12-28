# JS questions to know

### Gitlab (scrapped from glassdoor)
1.What's the difference between .map and .forEach?

-- While both are very similar in which they take a callback function and 
   iterate over an array. Map will always return an array and forEach will return undefined.

2. Does Javascript pass by value or by reference?

-- Reference, if you have an object A and you copy it to variable B and change object B object A's reference will also change. Copy the object to avoid this.

3. ____
4. Difference between inline, inline-block, block elements?

-- inline will set an inline element and respect padding and margin, inline-block does the same but you can set the height and width, block elements takes all props of inline, inline-block but sets a br after the element


5. ____
6. How to create DOM element from vanilla JS?

  const elm = document.createElement('div');
  elm.innerText = "Hello World";
  document.body.appendChild(elm);

7. Difference between GET and POST?

-- Get requests send requests with query params these requests wont usually include secrets etc POST request will usually include secrets like passwords

8. Explain this?

-- this is a global variable that binds everything to the surrounding context. This can change dependant on its scope, for instance this inside of a function will refer to the context of the function. Some functions behave differently such as an arrow function which uses "lexical scope"

// incorrectly binded
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object (because it's where growUp() is executed.), 
    // which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

// correctly binded
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age++;
  }, 1000);
}

var p = new Person();

9. What is a closure?

-- caching a variable in the upper scope for use later

10. Difference from .call, .apply, .bind?

--

11. What is the event loop?

-- 

12. Explain event propagation and bubbling?
13. What would be a reason to use ES6 classes?
14. Can you explain Vue's reactivity?
15. What is the virtual DOM?
16. Can you tell me how your process is architecting things?
17. Code Challenge - you have 10 minutes to build a linked list, pair program.
18. How to select the first children of an element? How to select the odd children elements?
19. What does box-sizing: border-box do?
20. Explain absolute/relative/fixed positioning.
21. How to create Class methods (object.prototype)?
22. How to inherit an object from another object's prototype?
23. Function references and binding the this keyword to make the this keyword work inside the function body, i.e. in an oncl1ck event.
24. What can we change in GitLab as an organization to make it better, for example the hiring process or the handbook?
25. What do you expect to achieve in your first month at GitLab?
26. What were you most satisfied with in your recent/current position?

