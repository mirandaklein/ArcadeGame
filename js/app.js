//TODO: Make bugs go at different speeds, make player reset when colliding with 
//bug, have "you won" message pop up when player reaches water with option to reset
// My Player.prototype.update and Player.prototype.handleInput need to be reworked,
//I put options for reworking into comments

"use strict";

// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x >= 550) {
        this.resetEnemy();
    }
};

// function to reset the enemy location.
Enemy.prototype.resetEnemy = function () {
    this.x = -50;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// PLAYER **********************

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method
var Player = function (x, y, speed) {
    this.x = x;
    this.y = y;

    this.initialX = this.x;
    this.initialY = this.y;

    this.speed = speed;
    this.sprite = 'images/char-cat-girl.png'
};

Player.prototype.update = function () {
    if (this.y === 0) {
        alert("You won!");
        alert("GOOD JOB!");

        this.resetPlayer();
    }
};



/*var checkForWin = function (player) {
    if (player.y === 0) {
        alert("You won!");
        alert("GOOD JOB!");

        player.resetPlayer();
    }
};*/


Player.prototype.handleInput = function (key) {
    //this.x = (dt * this.speed) + this.x
    //this.y = (dt * this.speed) + this.y


    if ((key == 'left') && (this.x > 0)) {
        this.x = this.x - 25;
    }
    else if ((key == 'right') && (this.x < 400)) {
        this.x = this.x + 25;
    }
    if ((key == 'up') && (this.y > 0)) {
        this.y = this.y - 25;
    }
    else if ((key == 'down') && (this.y < 376)) {
        this.y = this.y + 25;
    }
    this.update(key);
};


//Draw player on screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayer = function () {
    this.x = this.initialX;
    this.y = this.initialY;
};






// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(350, 100, 350), new Enemy(0, 200, 80), new Enemy(200, 300, 200), new Enemy(250, 175, 150)];
var player = new Player(200, 400, 20);






// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});