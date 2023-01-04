



var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics : {
        default : 'arcade',

        arcade: {
            gravity: {y :300},
            debug: true

        },

    },
    scene: { 
    preload: preload,
    create: create,
    update: update

    }

};



var game = new Phaser.Game(config)


function preload () {

    //recursos

    this.load.image('sky','/assets/fondo1.png')
    this.load.image('ground', '/assets/plataforma0.png' )
    this.load.spritesheet('zelda','/assets/personaje2.png', {frameWidth:280, frameHeight:385});




}


function create ()  {


    //fondo del juego

    this.add.image(1773,100, 'sky');


    //plataforma
   
plataforms = this.physics.add.staticGroup ();

plataforms.create(400,300, 'ground').setScale(0.4);




//refreshBody(); es para decirle a la fisica  es una llamada y es necesario avisar al sistema de fisica sobre los cambios hechos

//jugador

player = this.physics.add.sprite(300, 0, 'zelda').setScale(0.4);








//alterando gravedad del personaje

player.body.setGravityY(300);

// agregando los limites de la resolucion para que no se salga el personaje
player.setCollideWorldBounds(true);

//agregando un rebote del personaje en la ecena
player.setBounce(0.4);

//agregando collider


this.physics.add.collider(player, plataforms);





// animaciones para nuestro personaje

this.anims.create({

    key: 'left',
    frames: this.anims.generateFrameNumbers('zelda',{start:0 , end: 10}),
    frameRete: 10,
    repeat: -1


});

//animacion para que se quede quieto

this.anims.create({

    key: 'turn',

    frames: [{key: 'zelda', frame: 1}],
    frameRete: 20


});



this.anims.create({

key: 'right',
frames: this.anims.generateFrameNumbers('zelda', {start: 5, end: 10}),
frameRete: 10,
repeat: -1

})

cursors = this.input.keyboard.createCursorKeys();


}







function update (){


    if (cursors.left.isDown){

        player.setVelocityX(-160);
        player.anims.play('left', true)
    }

    else if (cursors.right.isDown){

        player.setVelocityX(160)
        player.anims.play('right', true)
    }

    else {
        player.setVelocityX(0)
        player.anims.play('turn')
       
    }

    if (cursors.up.isDown ){

        player.setVelocityY(-330);

       
    }

   


}