


var config = {

    type: Phaser.AUTO,
    height: 800,
    width: 800,
    scene: { 
    preload: preload,
    create: create,
    update: update

    }

};



const game = new Phaser.Game(config)


function preload () {

    this.load.image('sky','/assets/fondo1.png')
    this.load.spritesheet ("personaje", );


}


function create ()  {

    this.add.image(800,800, 'sky');


}

function update (){

}