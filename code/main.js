//By: Max
//Remember to import and export
//If 'this.' doesn't work, put 'var self = this;'

import { Enemy } from "./enemy.js"
import { Object } from "./objects.js"



var board = document.querySelector('#gameScreen')

function Player(x, y, walls) {
    this.sprite 
    this.x = x
    this.y = y
    this.direction = null
    this.speed = 10
    this.isAlive = true
    this.height = 60;
    this.width = 40;

    this.sprite

    this.insertPlayer = function() {
        var newPlayer = document.createElement('div')
        newPlayer.setAttribute('id', 'player')
        newPlayer.style.top = this.y + 'px'
        newPlayer.style.left = this.x + 'px'
        board.appendChild(newPlayer)
        this.sprite = newPlayer
    }
    this.move = function() {
        if (this.checkWallCollisions() == false) {
            switch(this.direction) {
                case 'w':
                    this.y -= this.speed
                    break
                case 'a':
                    this.x -= this.speed
                    break
                case 's':
                    this.y += this.speed
                    break
                case 'd':
                    this.x += this.speed
                    break
            }
            this.sprite.style.top = this.y + 'px'
            this.sprite.style.left = this.x + 'px'
        }
    }
    this.checkWallCollisions = function() {
        let nextX = this.x;
        let nextY = this.y;
        switch(this.direction) {
            case 'w':
                nextY -= this.speed
                break
            case 'a':
                nextX -= this.speed
                break
            case 's':
                nextY += this.speed
                break
            case 'd':
                nextX += this.speed
                break
        }
        for (var i = 0; i < walls.length; i++) {
            if (nextX < walls[i].x + walls[i].width &&
                nextY < walls[i].y + walls[i].height &&
                nextX + this.width > walls[i].x &&
                nextY + this.height > walls[i].y) {
                return true
            }
        }
        return false
    }

    this.checkObjectCollisions = function() {
        let nextX = this.x;
        let nextY = this.y;
        for (var i = 0; i < objects.length; i++) {
            if (nextX < objects[i].x + objects[i].width &&
                nextY < objects[i].y + objects[i].height &&
                nextX + this.width > objects[i].x &&
                nextY + this.height > objects[i].y) {
                
                return true
            }
        }
        return false
    }
}
var walls = [
    {
        x : 0,
        y : 0,
        width : 20,
        height : 350,
    },
    {
        x : 0,
        y : 450,
        width : 20,
        height : 350,
    },
    {
        x : 0,
        y : 800,
        width : 350,
        height : 20,
    },
    {
        x : 450,
        y : 800,
        width : 350,
        height : 20,
    },
    {
        x : 800,
        y : 450,
        width : 20,
        height : 370,
    },
    {
        x : 800,
        y : 0,
        width : 20,
        height : 350,
    },
    {
        x : 450,
        y : 0,
        width : 350,
        height : 20,
    },
    {
        x : 0,
        y : 0,
        width : 350,
        height : 20,
    },
    {
        x : 0,
        y : 200,
        width : 390,
        height : 20,
    },
    {
        x : 450,
        y : 0,
        width : 30,
        height : 300,
    },
    {
        x : 600,
        y : 100,
        width : 20,
        height : 700,
    },
    {
        x : 100,
        y : 550,
        width : 500,
        height : 20,
    },
    {
        x : 670,
        y : 400,
        width : 30,
        height : 30,
    },
    {
        x : 400,
        y : 670,
        width : 30,
        height : 30,
    },
    {
        x : 200,
        y : 700,
        width : 30,
        height : 30,
    },
    {
        x: 400,
        y: 500,
        width : 30,
        height : 30,
    },

    
]
 








var objects = [
{
    x : 400,
    y : 670,
    width : 30,
    height : 30,
},
{
    x : 200,
    y : 700,
    width : 30,
    height : 30,
},
{
    x: 400,
    y: 500,
    width : 30,
    height : 30,
}
]

var player = new Player(100, 100, walls)
player.insertPlayer()

window.addEventListener('keydown', function(e) {
    if (
        (e.key === 'w' ) ||
        (e.key === 'a' ) ||
        (e.key === 's' ) ||
        (e.key === 'd' )
    ) {
        player.direction = e.key;
        player.move();
    }
});


var enemy = new Enemy(30, 300, "horizontal", walls, player)
enemy.insertEnemy()
console.log(enemy)
var enemy = new Enemy(100, 450, "vertical", walls, player)
enemy.insertEnemy()
console.log(enemy)
var enemy = new Enemy(700, 20, "horizontal", walls, player)
enemy.insertEnemy()
console.log(enemy)
var enemy = new Enemy(60, 600, "vertical", walls, player)
enemy.insertEnemy()
console.log(enemy)

var object = new Object(30, 300, player)
object.insertObject()
console.log(object)





/*    switch(e.key) {
        case 'w':
            player.direction = "w"
            break
        case 'a':
            player.direction = "a"
            break
        case 's':
            player.direction = "s"
            break
        case 'd':
            player.direction = "d"
            break
    }
    */
    






//if ()






