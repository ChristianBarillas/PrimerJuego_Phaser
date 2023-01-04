


var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics : {
        default : 'arcade',

        arcade: {
            gravity: {y :300},
            debug: false

        },

    },
    scene: { 
    preload: preload,
    create: create,
    update: update

    }

};



let game = new Phaser.Game(config)


function preload () {

    //recursos

    this.load.image('sky','/assets/fondo1.png')
    this.load.image('plataforma', '/assets/plataforma.png' )
    this.load.image('plataforma2', 'assets/plataforma2.png' )
    this.load.spritesheet('zelda','assets/personaje.png', {frameWidth:120, frameHeight:120});




}


function create ()  {


    //fondo del juego

    this.add.image(1773,100, 'sky');


    //plataforma
   
plataform = this.physics.add.staticGroup ();

plataform.create(300,450, 'plataforma').setScale(0.2).refreshBody();
plataform.create(350, 150,'plataforma2').setScale(0.2).refreshBody();




//jugador

player = this.physics.add.sprite(200, 200, 'zelda').setScale(0.4);
player.setCollideWorldBounds(true);
player.setBounce(0.4);


// animaciones

this.anims.create({

    key: 'left',
    frame: this.anims.generateFrameNumbers('zelda',{start:0 , end: 4})


})


}









function update (){

}