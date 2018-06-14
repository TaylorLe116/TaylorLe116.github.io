### TODO 1 : Declare Our Variables

````javascript
// other code...

// TODO 1: Declare our variables //
var i, circle, circles;

// other code...
````

### TODO 2 : Initialize The Counter and Circles Array

````javascript
// other code...

// TODO 2: Initialize i to 0 //
i = 0;
circles = [];

// other code...
````

#### TODO 3 : Generate a Radomized Circle

Implement the following code such that your `while` loop now looks like this:

````javascript
// other code...
while (i < 100) {
    // TODO 3 : YOUR CODE STARTS HERE //////////////////////////
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
					
    if (circle.alpha < .2) {
    	draw.blurFilterOn(circle);
    }
    
    physikz.addRandomVelocity(circle, canvas);
    circles.push(circle);
    view.addChild(circle);
    
    // TODO 3 : YOUR CODE ENDS HERE ////////////////////////////
					
	/*
	 * IMPORTANT NOTE: 
	 * The statement i++; increments our counter by 1 on each loop.
	 * If we did not do this, the conditional check of while (i < 100)
	 * would never return false, and we would loop forever!
	 *
	 * Leave this as the last statement in the while loop
	 */
    i++;
}

// other code...
````

#### TODO 4 : Access The Current Circle from the Circles Array

Solve:

We know our that each circle was pushed into our Array of `circles`, and we know that our `for-loop` is incrementing an index (i) on each loop, once for each element in the `circles` Array.  So, using the Array syntax we discussed earlier in the lesson, what do we need to do to pull-out and assign an individual `circle` as we loop over the Array of `circles`?

````javascript
// other code...


// TODO 4 : Access one circle at time from the circles Array //
circle = ???

// other code...
````

#### TODO 5 : Update the Position of the Circle

````javascript
// TODO 5 : Update the circle's position //
physikz.updatePosition(circle)
````


#### TODO 6 : Keep The Current Circle Within the Bounds of the Canvas

We need to check each circle's position as we loop through the Array of `circles` to keep the circles coming back onto the `canvas`.

So, if a circle leaves the `canvas` along the _bottom_ border, we need to place the circle fully off the `canvas` at the top border.

So, write a test for each border of the canvas that checks if the circle has fully exited the canvas by _that_ border. Using a chain of `if`, `else-if` statements, you'll need one test for each border, right-side, left-side, top, and bottom. If a circle leaves the canvas by one of its borders, you need to place the circle fully off the canvas at the opposite border.  Dig?

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
// TODO 6 : YOUR CODE STARTS HERE //////////////////////

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

// YOUR TODO 6 CODE ENDS HERE //////////////////////////
````

### The End!