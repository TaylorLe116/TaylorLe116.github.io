var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var car;
        var buildings = [];
        var building;
        // Add any variables that will be used by render AND update here:
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight *.5 , 'MidnightBlue');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var circle;
            for(var i=0;i<100;i++) {
            circle = draw.circle(5,'Yellow','LightGray',1);
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
            }
            
            var sun = draw.bitmap('img/moon.png');
            sun.x = 300;
            sun.y = 25;
            sun.scaleX = 0.50;
            sun.scaleY = 0.50;
            background.addChild(sun);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeight;
            var building;
            for(var i=0;i<9;++i) {
            buildingHeight = 300;
            buildingHeight = Math.random()*buildingHeight;
            building = draw.rect(75,buildingHeight,'DarkGrey','White',1);
            building.x = 200*i
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a car
            car = draw.bitmap('img/car.png');
            car.x = 250;
            car.y = 290;
            car.scaleX = 0.35;
            car.scaleY = 0.35;
            background.addChild(car);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the car!
            car.x = car.x - 5;
            if(car.x < -350) {
                car.x = canvasWidth;
            }
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; ++i) {
               building = buildings[i]
               building.x -= 1;
               if(building.x < -75) {
                building.x = canvasWidth + 125;
               }
           }
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
