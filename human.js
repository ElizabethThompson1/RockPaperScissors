"use strict"
const prompt = require("prompt-sync")();
const Player = require("./Player");

class Human extends Player{
    constructor(name,){
        super(name);
        
        
    }

    displayGestureOptions(){
        console.log (this.gestures )
    }
  

    chooseGesture(playerName){
        console.log(playerName+" choose a gesture.")
       this.gesture = prompt()
        
    

    }

}

 



module.exports = Human;

