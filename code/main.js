//By: Max
//Remember to import and export
//If 'this.' doesn't work, put 'var self = this;'

var self = this;

var player = {
    sprite : document.getElementById("player"),
    x : 25,
    y : 25,
    isAlive : true
}

window.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'w':
                player.y -= 30
                player.sprite.style.top = player.y + 'px'
                break
            case 'a':
                player.x -= 30
                player.sprite.style.left = player.x + 'px'
                break
            case 's':
                player.y += 30
                player.sprite.style.top = player.y + 'px'
                break
            case 'd':
                player.x += 30
                player.sprite.style.left = player.x + 'px'
                break
    }
})



//if ()