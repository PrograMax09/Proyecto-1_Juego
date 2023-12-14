//By: Max
//Remember to import and export
//If 'this.' doesn't work, put 'var self = this;'


var board = document.querySelector('#gameScreen')
var self = this;

function Player(x, y) {
    this.sprite = document.getElementById("player")
    this.x = x
    this.y = y
    this.direction = null
    this.speed = 15
    this.isAlive = true

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

var player = new Player(100, 100)
player.insertPlayer()

window.addEventListener('keydown', function(e) {
    if (
        (e.key === 'w' && player.y >= 15) ||
        (e.key === 'a' && player.x >= 15) ||
        (e.key === 's' && player.y <= 735) ||
        (e.key === 'd' && player.x <= 760)
    ) {
        player.direction = e.key;
        player.move();
    }
    //player.move();
});
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








