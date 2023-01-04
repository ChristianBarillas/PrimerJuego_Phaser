


var config = {

    type: Phaser.AUTO,
    height: 800,
    width: 600,
    scene: { 
    preload: preload,
    create: create,
    update: update

    }

};



const game = new Phaser.Game(config)


function preload () {

    this.load.image('sky','/assets/fondo1.png')
    this.load.spritesheet ('personaje','/assets/personaje.png', {frameWidth:120, frameHeight: 130});


}


function create ()  {

    this.add.image(1773,800, 'sky');
    this.add.image(400,200, 'personaje')


}

function update (){

}