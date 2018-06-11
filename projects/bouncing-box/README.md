<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

# Bouncing Box

We're going to create a simple game where a box moves across the screen at an increased speed after each click.

[When you are done it should look like this](http://jsbin.com/toyikozeyi/1/edit?output)

Our goal for this game is to learn how to bring together HTML, CSS, and JavaScript. We use HTML to define our structure, CSS to define the style of that structure, and JavaScript in order to implement behavior. One of the primary ways we can implement behavior in JavaScript is by making modifications to the HTML and CSS in response to **events** which we will demonstrate by making this simple game. 


## Let's get started - installing bouncing box with `os install`
NOTE: If you receive an error that says, `os install command not found` the opspark CLI is not installed. To install it, enter the command `npm intall -g opspark` in your bash terminal. 

* Make sure your github and cloud9 accounts are linked to Greenlight
* Open your first website workspace
* go to your bash terminal (located at the bottom of the cloud9 workspace) and type in the command **os install**. Hit enter.
* If prompted, login with your github credentials
* Use your arrow keys to highlight your course and hit enter. hit enter again to confirm.
* Use your arrow keys to highlight bouncing-box and hit enter. hit enter again to confirm.
* open up the index.html file and press Run at the top of your workspace. You will be editing this file.

## A note about jQuery

We are going to be using [jQuery](https://jquery.com) for this exercise. You can see that we've included it in our web page with the following HTML 

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

jQuery is a powerful library which makes building web pages easier. It is also tremendously popular. If you are doing web development in 2015, you will likely run into jQuery. That is why we are introducing just a tiny bit of it here. 

You can recognize jQuery by its use of a very curious function `$()` Here is some of the jQuery code we use in this page:

    box = $('.box');
    boardWidth = $('.board').width();

## Lesson Steps

### TODO 1: Learn how to move the box

The HTML for our box has already been created for us:

    <body class="board">
      <div class="box">?</div>
    </body>

Find the CSS that styles the box and change the following properties:

- `left`
- `top` 
- `width`
- `height`

Notice how you can change the appearance of the box using CSS! Now return those to their original values

    width: 70px;
    height: 70px;
    top: 100px;
    left: 0px;

### TODO 2: Create Variables to Track Game Changes

By changing the `left` and `top` CSS properties of the box we are able to make it move. Our goal is animate the box so that it moves across the screen - but we can't just keep manually changing the values of these properties.

Solution: Let's create some variables that we can program to change these properties as our game progresses. We'll need variables to keep track of all aspects of our game that are changing: The box's position, how fast it's moving, and how many times it has been clicked. 

Declare and initialize `position` and `points` variables to zero and `speed` to 10

    // TODO 2
    var position;
    var points;
    var speed;

    position = 0;
    points = 0;
    speed = 10;

We will be using the following jQuery functions to make use of these changing variables. For now, don't worry about how they work, simply recognize these lines of code and what they do. Add them below your new variables:
    
    box.css('left', position);      // changes the 'left' css property of the box to value of var position
    box.text(points);               // changes the text of the box to display the value of var points

The box.css() function changes the `left` css property of our box element to the value of `var position`. As we change the value of `position`, the box will move. Change the value of the `position` variable to `100` and watch the box move!

The box.text() function changes the text content of our box element. Change the `points` variable and watch how it changes the points displayed.

Before we move on, lets reset those variables to their starting values

    position = 0;  
    points = 0;  
    speed = 10;

### TODO 3: Animating the box

You can create animation on a web page by changing the appearance of an object over time. A traditional animation is made up of individual "frames" of still images that change slightly over time. If you flip between these images rapidly the viewer sees the scene as motion (think of a flipbook!). 

We can do the same thing in programming by constantly changing the state of our program. The `setInterval` function allows us to setup a timer, where we call a function every so often. **How often**, the time between function calls, is called the interval. That interval is expressed in milliseconds, or thousandths of a second. The function that we call will make slight changes every interval such that the state of our program is constantly animated.

The following code calls our `update` function every 50 milliseconds, which is about 20 times per second (It's already there so you don't need to copy/paste this):
    
    setInterval(update, 50);

The `update` function is where we will modify the state of our program so that when it is called our box moves. To do so we need to change the `position` of the box and update the box's css accordingly. 

Add the following code to the `update` function so it looks like this:

    function update() {
        position = position + speed;
        box.css('left', position);
    };

### TODO 4: Handling events

An event is just a particular thing that has happened. Some examples of **events** are:

- A timer going off
- The user clicking on something
- the web page has finished loading

JavaScript allows us to change the web page in response to **events**. The following code calls the `handleBoxClick` function every time the box is clicked. **(It's already there so you do not need to copy/paste this)**

    box.on('click', handleBoxClick);

Every time the user clicks the box, we want to reset the box to its starting position and make the game harder by increasing the speed of the box. Add the following code to the `handleBoxClick` function

    function handleBoxClick() {
      speed = speed + 3;
      position = 0;
    }

### TODO 5: Keeping Score

We want to keep track of how many times the user has clicked on the box. 

Add the following code to the `handleBoxClick` function

     points = points + 1;

and then add the following code to the `update` function

    box.text(points);

What's going on here?

### TODO 6: Hey box, come back!

Each time we call the `update` function the position variable gets larger and larger until eventually our box has gone off the screen. The position of our box should never be greater than the width of the board which we've conveniently stored in a variable called `boardWidth`. 

Let's get our box back on the screen `if` the `position` is greater than `boardWidth`. Add the following code **nested inside** the `update` function:

    if(position > boardWidth) {
        position = 0;
    }

Your entire `update` function should look like this:

    function update() {
        position = position + speed;
        if(position > boardWidth) {
         position = 0;
        }
        box.css('left', position);
    };


### TODO 7: Add Direction

So we have the box loop back to the left the screen, but don't we want it to bounce off of the walls?

Before we can make it bounce we have to figure out how to make the box move from right to left.
Right now our motion comes from the following line in the `update` function:

    position = position + speed;
    
Since `speed` is positive, `position` keeps getting bigger and moves further from the left. To make the box 
move the other way we need to make speed **negative**. 

At the top of your program where the other variables are declared, declare a variable `direction` that will tell us whether to add or subract the speed. **Do this just below the other variable declarations**

    var direction;
    direction = 1;
    
Now in the `update` function we want to re-assign the value of position like so:

    position = position + (speed * direction);
    
When `direction` is set to 1 then `speed` is added to position and the box moves to the right. But when `direction` is set to -1,the speed is subracted from the position, sending the box to the left.

### TODO 8: Make it Bounce

#### We need to decide when to change the direction: Conditionals!

In our `update` function we have this if statement to make sure our box doesn't go off the right side of the screen. It says: If the position of my box moves past the right side of the board, move my box back to position 0.

    if(position > boardWidth) {
        position = 0;
    }
    
 
We need to change this bounds-check so that instead of resetting the position of our box to 0 we change the direction to -1.
Do this and confirm that the box bounces off the right wall. It should look like this:

    if(position > boardWidth) {
        direction = -1;
    }
    
Now that your box bounces off the right wall you'll need to make it bounce off the left wall. What will be the condition? What do we want to do if that condition is true? Do this yourself!

#### Hint: At what position value do you want the box to "bounce" off the left wall?

## Good Job

You've written your first game! Here are some ways you can try and make your game even more awesome.

### Can you make the box change color with each click? How about every 3 clicks?
### Can you make the amount that the box speeds up with each click increase with every 3 clicks?
### Can you move the box up and down?
### Use the [background-image](http://www.w3schools.com/cssref/pr_background-image.asp) CSS property to change your box or the background

