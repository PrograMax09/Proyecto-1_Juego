
var board = document.querySelector('#gameScreen');


function Enemy(x, y, movement, walls, player) {
    var self = this;
    this.equantity = 1;
    this.ex = x;
    this.ey = y;
    this.edirection = 1;
    this.espeed = 5;
    this.eisAlive = true;
    this.height = 70;
    this.width = 40;

    this.esprite;

    this.insertEnemy = function() {
        var newEnemy = document.createElement('div');
        newEnemy.setAttribute('class', 'enemy');
        newEnemy.setAttribute('id', 'enemy' + this.equantity);
        newEnemy.style.top = this.ey + 'px';
        newEnemy.style.left = this.ex + 'px';
        board.appendChild(newEnemy);
        this.esprite = newEnemy;
        this.equantity++;
    }


    this.checkPlayerCollision = function() {
        if (player.x < this.ex + this.width &&
            player.y < this.ey + this.height &&
            player.x + player.width > this.ex &&
            player.y + player.height > this.ey) {
            console.log("He chocado contra el jugador")
        }
    }



    this.checkWallCollisions = function() {
        let nextX = this.ex;
        let nextY = this.ey;
        switch(movement) {
            case 'horizontal':
                nextX += this.espeed * this.edirection
                break
            case 'vertical':
                nextY += this.espeed * this.edirection
                break
        }
        for (var i = 0; i < walls.length; i++) {
            if (nextX < walls[i].x + walls[i].width &&
                nextY < walls[i].y + walls[i].height &&
                nextX + this.width > walls[i].x &&
                nextY + this.height > walls[i].y) {
                this.edirection *= -1
            }
        }
   }

    this.emove = function() {
        if (movement == "horizontal") {
            self.ex += self.edirection * self.espeed;
            self.esprite.style.left = self.ex + 'px';
            self.checkWallCollisions()
            self.checkPlayerCollision()
        }
    }
    this.timerId = setInterval(this.emove, 50);
}







export {Enemy}