"use stric"

const phaser = require("phaser");

const conf = {

    type: phaser.AUTO,
    height: 800,
    width: 800,
    ecene: { 
    preload: preload,
    create: create,
    update: update

    }

}



const juego = new phaser.Game(conf)


function preload () {


}


function create ()  {


}

function update (){

}