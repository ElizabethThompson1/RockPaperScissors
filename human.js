"use strict"
const prompt = require("prompt-sync");
const Player = require("./Player");



class Human extends Player{
    constructor(name,){
        super(name);
        
       
    }

    displayGestureOptions(){
        console.log (this.gestures )
    }
  

    chooseGesture(){
        let questionOne = prompt("choose a gesture. Enter 1,2,3,4, or 5")
        console.log (this.slectedGesture = questionOne)
    

    }
}  


module.exports = Human;

