
var board = document.querySelector('#gameScreen');


function Object(x, y, player) {
    this.osprite 
    var self = this;
    this.oquantity = 1;
    this.ox = x;
    this.oy = y;
    this.odirection = 1;
    this.ospeed = 5;
    this.oIsCollected = true;
    this.oheight = 70;
    this.owidth = 40;

    this.esprite;

    this.insertObject = function() {
        var newObject = document.createElement('div');
        newObject.setAttribute('class', 'object');
        newObject.setAttribute('id', 'object' + this.oquantity);
        newObject.style.top = this.oy + 'px';
        newObject.style.left = this.ox + 'px';
        board.appendChild(newObject);
        this.osprite = newObject;
        this.oquantity++;
    }


    this.checkPlayerCollision = function() {
        if (player.x < this.ox + this.owidth &&
            player.y < this.oy + this.oheight &&
            player.x + player.owidth > this.ox &&
            player.y + player.oheight > this.oy) {
            self.osprite.style.displapy = 'none';
        }
    }




}







export { Object }