Circularity
===

A motion poem using random number generation and velocity applied to circles...

Also at: http://bit.ly/op-spark-circularity

**Table of Contents**

- [Circularity](#circularity)
  - [Installation](#installation)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Take Away](#take-away)
    - [Entering Code](#entering-code)
    - [Type of App : Web](#type-of-app--web)
  - [Lesson Steps](#lesson-steps)
    - [Initializing Our App](#initializing-our-app)
      - [Loops To The Rescue](#loops-to-the-rescue)
      - [Code Blocks](#code-blocks)
    - [Variable Declaration](#variable-declaration)
      - [TODO 1 : Declare Our Variables](#todo-1--declare-our-variables)
    - [Variable Initialization](#variable-initialization)
      - [TODO 2 : Initialize The Counter and Circles Array](#todo-2--initialize-the-counter-and-circles-array)
      - [TODO 3 : Create a for loop](#todo-3--create-a-for-loop)
      - [TODO 4 : Generate a Randomized Circle](#todo-4--generate-a-randomized-circle)
    - [Run the App](#run-the-app)
    - [Update our Variables](#update-our-variables)
      - [TODO 5 : Access The Current Circle from the Circles Array Array](#todo-5--access-the-current-circle-from-the-circles-array)
      - [TODO 6 : Update the Position of the Circle](#todo-6--update-the-position-of-the-circle)
      - [TODO 7 : Keep The Current Circle Within the Bounds of the Canvas](#todo-7--keep-the-current-circle-within-the-bounds-of-the-canvas)
  - [Just Code TODOs](#just-code-todos)
  - [Just Code TODOs in Google Presentation](#just-code-todos-in-google-presentation)

## Installation 

## Let's get started - installing bouncing box with `os install`
NOTE: If you receive an error that says, `os install command not found` the opspark CLI is not installed. To install it, enter the command `npm intall -g opspark` in your bash terminal. 

* Make sure your github and cloud9 accounts are linked to Greenlight
* Open your first website workspace
* go to your bash terminal (located at the bottom of the cloud9 workspace) and type in the command **os install**. Hit enter.
* If prompted, login with your github credentials
* Use your arrow keys to highlight your course and hit enter. hit enter again to confirm.
* Use your arrow keys to highlight bouncing-box and hit enter. hit enter again to confirm.
* open up the index.html file and press Run at the top of your workspace. You will be editing this file.


## (SKIP IF ALREADY INSTALLED) Installation without 'os install'

Create a new Cloud9 workspace and clone the project from github.com:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace" > "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the "Source URL" form input, copy and paste in the following URL (see A):
    
        https://github.com/OperationSpark/circularity.git
    
    Then, in the environment selection box, select "HTML5" (see B).  Finally, click the green button "Create" (see C).
    
    <img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/clone-workspace.png">

3. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar), and once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/start-editing.png">

4. Now, when the workspace is loaded, select the command-line in the bottom window pane, and enter the command `bower install`, then press `Enter`, like this:

    <img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/bower-install.png">

    You'll see some test flying by on the command-line as some required files are installed... and when complete, you'll see something like this:
    
    <img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/bower-installed.png">

Nice, you're in business...

***

## Overview

### Specs

The portrait of the programmer as a young artist continues, using random number generation, color, and velocity applied to circles in this little motion poem.  As usual, we're going to be drawing to an HTML5 Canvas element using the drawing API of the CreateJS module, EaselJS, and our helper library, draw, that simplifies the drawing process somewhat.

### Take Away

Using the draw line API to create a cool randomized piece of art.

Some concepts you'll learn are:


* Drawing with CreateJS and our draw utility.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* The for loop.
* Conditional statements - making decisions in code.
* Recognizing code blocks.
* Calculating coordinates in a cartesian system.
* Calculating boundaries.
* Animating.
* Pair programming.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

**EXAMPLE**

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

**EXAMPLE**

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/todo-done.png">

Sweet!

### Type of App : Web

Note that **this app will run _in a web browser_**, preferably Chrome.

***

## Lesson Steps

All of our coding will happen in the and write your code in the `<script id="motion-poem">` tag located at the bottom of the `index.html` file.

So, open the file at:

    index.html

***

### Initializing Our App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Declaring and initializing some variables for use in our app.

We've setup the app a little bit already, importing some libraries and initializing the basic plumbing in the background, and we won't be loading any external data in our app, so let's move on to declaring, initializing and using our variables.

Our motion poem will contain 100 randomly drawn circles, arranged randomly within the area of our canvas.  The big takeaway in this project is **DRY**: Don't repeat yourself!

We want to draw 100 circles, but we don't want to write the code to do so 100 times.  That would be a silly waste of time and effort, making the code very difficult to maintain.

#### Loops To The Rescue

Every programming language comes with features built-in to help you implement repetative processes, like looping over a list of data, or drawing a circle 100 times.  If we want to do anything more than once, we can use a _loop_, and is most often best practice to do so.

JavaScript comes with a number of built in loops, like `for` `for-in` and `while`, and many 3rd party libraries, like <a href="https://lodash.com/">_lodash_</a>, have implementations of other types of loops.


We're going to use the `for` loop to accomplish our task.  It works like this:

````javascript
for (var i = 0; i < 100; i++) {
    console.log(i);
}
````

The for loop is a great tool to repeat a `{ code block }` a specific number of times. After the keyword `for` are parentheses where you setup your for loop. Here is where you define how the loops starts, when it ends, and how you want to move on from one loop to the next. There are three parts to it:

* **initialization** : `var i = 0;`
	* a variable `i` is initialized to act as a counter to keep track of how many times we have run our loop. We start at 0.
* **stop condition** : `i < 100;`
	* This statement is the condition against which we check on each loop. If `i` is less than 100, the code block for the loop will execute.
* **post condition** : `i++;`
	* This statement _increments_ (adds 1 to) the `i` variable and is executed after each run of the loop.
	* NOTE: `i++;` is shorthand for `i = i + 1;`, and you'll see the `++` or `--` operators used often in code to accomplish this type of pattern.

Finally, we have our code block within the braces `{ }`.

When all of these are put together our for loop will execute the code block as long as the `i` variable is less than 100. The `i` variable starts at 0 and, because we increment it after each loop, will increase until the stop condition is no longer true - at which point the loop will stop. 

So then, looking at the above snippet of code, what would be the result of running that code?


#### Code Blocks

Blocks of code belong to functions, loops and conditional statements.

Code blocks are always encased within the braces `{ // code block... }`, and the code inside them is always indented by one tab.  The `{ }` braces around code blocks might seem confusing because these braces also represent Object literals.  You will, however, come to know when they stand for an Object, and when they represent a code block: it has everything to do with the _keyword_ that precedes the braces, as well as what we do within the code block.

For example:

````javascript
var myObject = {nameFirst: 'John'};
````

Above, the keyword `var` tells you you're creating a variable, and the assignment opporator, `=`, points to an object literal, `{nameFirst: 'John'};`  The braces in this case encapsulate the key/value pairs of the Object, in this case, `nameFirst` and `'John'`.

Whereas:

````javascript
for (var i = ; i < 100; i++) {
    console.log(i);
}
````

In this last example, the keyword `for` tells us we're opening a `for` loop, so the `{ }` braces that follow it represent the _body_ or _code block_ of the `for` loop.  The code inside these braces is the _block_ of code that will be executed each time the condition of `i < 100` is `true`.

This is the same pattern with function definitions:

````javascript

function add(a, b) {
    return a + b;
}
````

Same thing here, the keyword `function` tells us we're declaring a function, and the `{ }` braces that follow it represent the _body_ or _code block_ of the `function`.  The code inside these braces is the _block_ of code that will be executed each time the function is invoked.

Pay close attention to blocks of code and their `{ }` braces: you MUST always have an opening AND closing brace, otherwise the JavaScript interpreter will throw an error or your IDE will complain.

Great stuff, we're going to use the `for` loop to draw and initialize our circles.  Before we get there, let's first declare our app's required variables.

***

### Variable Declaration

#### TODO 1 : Declare Our Variables

For our app, the things we'll need are:

* `i`: a counter for our for loop.
* `circle`: we will use this variable to hold the circle shape we create using the `draw` library.
* `circles`: this variable will be an Array to hold all of our circles so we can loop through them all and update each.

Ok, we can take care of declaring our variables all in one statement: Find **TODO 1** and declare our variables like so:

````javascript
// other code...

// TODO 1: Declare our variables //
var i, circle, circles;

// other code...
````

### Variable Initialization

#### TODO 2 : Initialize The Counter and Circles Array

Sweet, next let's _initialize_ our counter and the circles Array.  Find **TODO 2** and initialize our counter `i` to `0` and the circles variable to `[]`, an empty Array:

````javascript
// other code...

// TODO 2: Initialize our variables //
i = 0;
circles = [];

// other code...
````

#### TODO 3: Create a for loop
Excellent!  Now witness the power of computation:

We know we want to draw 100 circles, and that the `for` loop is the way go, so let's go ahead and put the for loop in place. We've provided an outline of the for loop for you; What should the start and end value be to make this loop run 100 times?

````javascript
// other code...

for (i = start; i < end; i++) {
    // TODO 4 : YOUR CODE STARTS HERE //////////////////////////
    
    
    
}

// other code...
````

#### TODO 4 : Generate a Randomized Circle
Ok, now, _inside_ the code block of the `for` loop, we're going to initialize our `circle` shape!

Implement the following code such that your `for` loop now looks like this:

````javascript
// other code...
for (i = 0; i < 100; i++) {
    // TODO 4 : YOUR CODE STARTS HERE //////////////////////////
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
					
    if (circle.alpha < .2) {
    	draw.blurFilterOn(circle);
    }
    
    physikz.addRandomVelocity(circle, canvas);
    circles.push(circle);
    view.addChild(circle);
}

// other code...
````

First, we're going to use the API of our `draw` utility to draw a `randomCircleInArea()`.  This method will draw a circle random in its color, radius, transparency and position, _and_ add a cross shape to the circle.  Why the cross shape?  You'll see...

The API of this function is:

    randomCircleInArea(area, randomizeAlpha, addCross, borderColor, borderThickness, randomRadialProps)

...and we're passing in the arguments:

    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    
The area in this case is the `canvas`, so our circle will be given a randomly generated x and y coordinate within the area of our canvas.  Next we pass in two boolean values of `true`, which means we want to randomize its transparency (alpha) and add a cross shape to our circle.  Finally, the last two values, `'#999', 2`, represent the color and thickness of the circle's border.Circularity

Next, we check `if (circle.alpha < .2)`, which says _if_ the transparency of the circle happens to be less than .2, which would be almost fully transparent, we use again our `draw` utility to add a blur filter to our circle.  This will produce a neat effect on the circles such that those almost transparent will appear to be _off in the distance_.

After this, we create some magic:  We pass in our newly created `circle` and the area of the `canvas` to the `addRandomVelocity()` method of the `physikz` library, and this will add some randomly generated velocity properties, giving our circle a speed and direction within the area of our canvas:

    physikz.addRandomVelocity(circle, canvas);

Finally, we `push` our initialized circle into the the circles Array.  `push` is part of the API of a JavaScript Array, and this is the method we use to add elements to an Array.  We do this for all our circles created within the `for` loop, so we can have all the circles collected into a list which we can loop through at a later time, and update the properties of each circle.  In doing so, we can easily update the `x` and `y` properties of 

### Run the App


Alrighty, to run the app, YOU MUST open the file at:

    index.html

And with the `index.html` tab selected in the editor (see A), you can simply press the green play button (see B).

This will start an Apache web server in a new tab of the Console View, the bottom window pane of the Cloud9 IDE.  Once Apache has booted, you can click the URL `https://circularity-jfraboni.c9.io/index.html` (see C) - this will open a new tab with the appliation running.

<img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/run-app.png">

Once this tab opens, we recommend popping out the tab into Chrome, into a separate browser tab.  To do so, click on the popout button on the right side of the preview tab (see A), like so:

<img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/popout.png">

This will give you the app running in a separate Chrome tab.  As you save your future work, changes to your code will be reflected in the app > you don't have to press "Run" again - as long as the Apache web server is still running - you need only press the refresh button on the Chrome tab with the app running in it.  In this image, we also have the Chrome debugger console open, which will tell you if there's any problems with your code.  Have a look:

<img src="https://raw.githubusercontent.com/OperationSpark/circularity/master/img/chrome.png">


***

### Update our Variables

Awesome, let's do some fun stuff with our circles now.  Remember that in our _motion poem_ apps (the series of apps to which this app belongs), our `update()` method is called 60 times per second, so it gives us the perfect place to update properties of our display objects in order to create the illusion of motion, otherwise known as, _animation_!

Given this, the rest of our work will take place within the `update()` function.  Right now, it's stubbed out like this:

````javascript
function update() {
    for (var i = 0; i < circles.length; i++) {
        // TODO 5 : Access one circle at time from the circles Array //
        
        // TODO 6 : Update the circles position //
        
        // TODO 7 : YOUR CODE STARTS HERE //////////////////////
        
        if ( / * test for right-side * / ) {
            // your code to place circle exactly off the stage at the left-side //
        } else if ( / * test for left-side * / ) {
            // your code to place circle exactly off the stage at the right-side //
        } if ( / * test for top * / ) {
            // code to place circle exactly off the stage at the bottom //
        } else if ( / * test for bottom * / ) {
            // your code to place circle exactly off the stage at the top //
        }
        
        // YOUR TODO 7 CODE ENDS HERE //////////////////////////
    }
}
````

The thing to notice here is that we are again using the `for` loop but in a different way. Instead of incrementing the value of i until it is less than 100 we are doing so until it is less than circles.length... It's time to do a little problem solving: 

All your code for TODO 5, TODO 6 and TODO 7 will go _within_ the code block of this `for` loop, so keep that in mind!

#### TODO 5 : Access The Current Circle from the Circles Array

The fastest way to make all of our circles move is by **Iterating** over our array. We can do this by using Bracket Notation to pull out the circle at index `i` from the `circles` array and store it in a variable which we call `circle`.

Arrays are _zero-indexed_ lists of objects.  Basically, an Array acts as a container, into which we can throw objects, like strings, numbers, or circles. We call the things we throw into Arrays, _items_ or _elements_, as in, the _elements_ of our Array.

To retrieve an individual _element_ from an Array, we can use _Array syntax_, which uses the name of the Array, followed by square brackets that enclose a number representing the position of the element.

So, if we literally created an Array like this:

````javascript
var friends = ['John', 'Max', 'George', 'Ben', 'Steve', 'Brian'];
````

Then we can access the elements of the `friends` Array like so:

````javascript
var name = friends[1];
console.log(name); // prints Max
````

So, above, we used _Array syntax_ to access the second element of the `friends` Array, `friends[1]`, which equates to `Max`.  Because Arrays are _zero-indexed_, the first element is at index 0, the second element is at index 1, and so on.

So, we know our that when we created our circles, each `circle` was pushed into our Array of `circles`, and we know that our `for-loop` is incrementing an index, `i` on each loop, once for each element in the `circles` Array. So, using the Array syntax we discussed earlier in the lesson, what do we need to do to pull-out and assign an individual `circle` as we loop over the Array of `circles`?

````javascript
// other code...


// TODO 5 : Access one circle at time from the circles Array //
circle = ???

// other code...
````

Why are we doing this?

We are doing this so that we don't have to keep referring to an individual circle using bracket notation. Instead of circles[?] we can just use circle.

#### TODO 6 : Update the Position of the Circle

Okay, now we have our circle, let's use the `updatePosition()` API of the `physikz` library to update the position of the circle:

````javascript
// other code...

// TODO 6 : Update the circle's position //
physikz.updatePosition(circle)

// other code...
````

#### TODO 7 : Keep The Current Circle Within the Bounds of the Canvas

We need to check each circle's x and y position as we loop through the Array of `circles` to keep the circles inside the `canvas` (the screen).

So, if a circle leaves the `canvas` along the _bottom_ border, we need to place the circle fully off the `canvas` at the top border. We can do this by changing the circle's y property like so: `circle.y = newPositionY;` where `newPositionY` is the coordinate where you want the circle's new y location to be.

Write a test for each border of the canvas that checks if the circle has fully exited the canvas by _that_ border. Using a chain of `if`, `else-if` statements, you'll need one test for each border, right-side, left-side, top, and bottom. If a circle leaves the canvas by one of its borders, you need to place the circle fully off the canvas at the opposite border.  Dig?

The best way to start this is to hack away, testing one border at a time!

To do this, you'll have to lean on what you know:

    canvas.width    // The the width of our canvas.
    canvas.height   // The height of our canvas.
    circle.x        // The circle's position along the x-axis, good for testing the right and left side borders.
    circle.y        // The circle's position along the y-axis, good for testing the top and bottom borders.
    circle.radius   // Each circle is of a different size, so the radius will provide this information to you. ALSO, the circle is centered around its own x and y position, so we can find where its outer edges are located within the canvas by adding or subtracting its radius from its own x or y value.  But you'll see this as you hack away to acheive the expected results.

We've _stubbed_ a chain of `if`, `else-if` statements for you, all you need to do is replace the comments between the `()` parentheses with your check for that particular border:

So, for example, replace:

    / * test for right-side * /
    
With:

    circle.x > canvas.width + circle.radius

So that your `if` statement looks like:

````javascript
if (circle.x > canvas.width + circle.radius) {
    // your code to place circle exactly off the stage at the left-side //
}
````

The full stub code for our `if`, `else-if` statements is here:

````javascript
// TODO 7 : YOUR CODE STARTS HERE //////////////////////

if ( / * test for right-side * / ) {
    // your code to place circle exactly off the stage at the left-side //
} else if ( / * test for left-side * / ) {
    // your code to place circle exactly off the stage at the right-side //
}

if ( / * test for top * / ) {
    // code to place circle exactly off the stage at the bottom //
} else if ( / * test for bottom * / ) {
    // your code to place circle exactly off the stage at the top //
}

// YOUR TODO 7 CODE ENDS HERE //////////////////////////
````

## Just Code TODOs

[Just Code TODOs](https://github.com/OperationSpark/circularity/blob/master/JUST-TODOS.md)

## Just Code TODOs in Google Presentation

<a href="https://docs.google.com/presentation/d/1eRYV5JL5_LMO29NDf-_EgbNoDWlABkbwwSRS8ClDDsg/edit?usp=sharing" target="_blank">Code Presentation</a>

&copy; Operation Spark 2015
