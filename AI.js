"use strict"

const Player = require("./Player");
const prompt = require ('prompt-sync')();

class AI extends Player{
    constructor(){
        
        super("computer");
      
        
    }
   
    chooseGesture(){
    this.gesture=this.gestures [Math.floor(Math.random()*this.gestures.length)];
    }
    
    
}  

module.exports=AI;


 