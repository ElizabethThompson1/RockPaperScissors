"use strict"
let People = require("./human.js");
const prompt = require ('prompt-sync')();




class Player extends People{
    constructor(name,){
        super(name);
        this.playerOne = new (People)
        this.playerTwo = new (People)
        this.score ="3"
        this.pointsMin= "1"
    }
    people(opposingPlayer){
        opposingPlayer.score = opposingPlayer.score - this.pointsMin
    }
}  


