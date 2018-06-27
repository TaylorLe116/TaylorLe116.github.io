var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -6,
            gameItems: [
                {type: 'skull',x:400,y:200},
                {type: 'sawblade',x:800,y:250},
                {type: 'sawblade',x:1200,y:250},
                {type: 'skull',x:1600,y:350},
                {type: 'sawblade',x:1800,y:400},
                {type: 'skull',x:2200,y:275},
                {type: 'sawblade',x:2600,y:325},
                {type: 'sawblade',x:3000,y:225},
                {type: 'skull',x:500,y:200},
                {type: 'skull',x:420,y:250},
                {type: 'enemy',x:500,y:325},
                {type: 'enemy',x:1000,y:325},
                {type: 'enemy',x:1500,y:325},
                {type: 'enemy',x:2000,y:325},
                {type: 'reward',x:1000,y: groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createEnemy(x, y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
    
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -2;
            enemy.rotationalVelocity = -4;
            game.addGameItem(enemy);
            
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-250);
            };
        };
        function createReward(x, y) {
            var reward =  game.createGameItem('reward',25);
            var yellowSquare = draw.rect(50,50,'yellow');
            yellowSquare.x = -25;
            yellowSquare.y = -25;
            
            reward.addChild(yellowSquare);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -1;
            reward.rotationalVelocity = -4;
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.changeIntegrity(250);
                game.increaseScore(4200);
                reward.fadeOut();
            };
        };
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);obstacleImage.x = -25;
            obstacleImage.y = -25;
        };
        function createSkull(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 25;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/skull.png');
            myObstacle.addChild(obstacleImage);obstacleImage.x = -25;
            obstacleImage.y = -25;
        };
        
        // Old
        // createSawBlade(400, 200)
        // createSawBlade(500, 150)
        // createSawBlade(666, 360)
        // createSawBlade(777, 250)
        // createSawBlade(1250, 300)
        // createEnemy(500,groundY-325);
        // createEnemy(250,groundY-325);
        //createReward (325,325);
        
        for (var i = 0; i < levelData.gameItems.length; i++){
            var globPosX = levelData.gameItems[i].x;
            var globPosY = levelData.gameItems[i].y;
            if (levelData.gameItems[i].type === 'sawblade'){
                createSawBlade(globPosX, globPosY);
            } else if (levelData.gameItems[i].type === 'skull'){
                createSkull(globPosX, globPosY);
            } else if (levelData.gameItems[i].type === 'reward'){
                createReward(globPosX, globPosY);
            } else {
            createEnemy(globPosX, globPosY);
            }
        };
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}