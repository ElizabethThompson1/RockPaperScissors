const prompt = require("prompt-sync")
const AI = require("./AI")
const Player = require ("./Player")
const Human = require ("./Human")


class Game {
    constructor(){

    }
    
    PickWhoToPlay(){
        let QuestionPickAplayer = prompt("Who would you like to play 1 or 2? 1.Human or 2.AI?")
        if (QuestionPickAplayer === "1"){
            this.humanVsHuman()
        }
        else  if (QuestionPickAplayer ==="2"){
             aiVsHuman()
        }// create else statrment to go back to questionpickplayer
    }
    aiVsHuman(){
        this.playerOne = new Human ("Player")
        this.playerTwo = new AI ("AI")
    }   

    humanVsHuman(){
        this.playerOne = new Human ("Player One")
        this.playerTwo = new Human ("Player One")
    } 
    
    choosesWhoWins(){
        switch(this.gesture){
            case "Rock"
            
        }
    }
    // whos wins out of whta the choose out of gestures
   
    runGame(){
        this.PickWhoToPlay();    }
}
module.exports={
 Game:Game
}