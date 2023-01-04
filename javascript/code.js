


var config = {

    type: Phaser.AUTO,
    height: 800,
    width: 600,
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



const game = new Phaser.Game(config)


function preload () {

    this.load.image('sky','/assets/fondo1.png')
    this.load.image('plataforma', '/assets/plataforma.png' )
    this.load.image('plataforma2', 'assets/plataforma2.png' )




}


function create ()  {

    this.add.image(1773,800, 'sky');
   
plataform = this.physics.add.staticGroup ();

plataform.create(200,600, 'plataforma').setScale(1.6);
plataform.create(350, 250,'plataforma2').setScale(0.3);


}

function update (){

}