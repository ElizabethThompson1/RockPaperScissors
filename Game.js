const prompt = require("prompt-sync")
const AI = require("./AI")
const Player = require ("./Player")
const Human = require ("./Human")


class Game {
    constructor(){

    }
    
    PickWhoToPlay(){
        console.log("Who would you like to play 1 or 2? 1.Human or 2.AI?")
        let QuestionPickAplayer = prompt();
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
    pointsForPlayer(){

    }
    // ake a new function to add points where console.log is 
    choosesWhoWins(){
        if (this.gesture ==="Rock"){
            if( this.gesture ==="Scissors"){
                this.Player.score++
            }
            else if (this.gesture === "Lizard"){
                this.Player.score++
            }
            else if (this.gesture === "Rock"){
                console.log("it's  TIE!")
            }
            else {
                console.log ("You lost this round.")
            }
        

        }
        else if (this.gesture === "Scissors" ){
            if(this.gesture === "Paper"){
                this.Player.score++
            }
            else if(this.gesture === "Lizard"){
                this.Player.score++
            }
            else if (this.gesture === "Scissors"){
                console.log("it's  TIE!")
            }
            else {
                console.log ("You lost this round.")
            }
        
        }
        else if (htis.gesture === "Paper"){
            if(this.gesture === "Rock"){
                this.Player.score++
            }
            else if(this.gesture === "Spock"){
                this.player.score++
            }
            else if (this.gesture === "Paper"){
                console.log("it's  TIE!")
            }
            else {
                console.log ("You lost this round.")
            }
        }
        else if (this.gesture === "Lizard"){
            if (this.gesture === "Spock"){
                this.Player.score++
            }
            else if (this.gesture === "Paper"){
                this.Player.score++
            }
            else if (this.gesture === "Lizard"){
                console.log("it's  TIE!")
            }
            else {
                console.log ("You lost this round.")
            }
        }
        else if (this.gesture === "Spock"){
            if (this.gesture === "Scissors"){
                this.player.score++
            }
            else if (this.gesture === "Rock"){
                this.player.score++
            }
            else if (this.gesture === "Spock"){
                console.log ("It's a TIE!")
            }
            else {
                console.log ("You lost this round.")
            }


        }
        
    }


    
        
    
    // whos wins out of whta the choose out of gestures
   
    runGame(){
        this.PickWhoToPlay(); 
        this.choosesWhoWins();
    }
}
module.exports={
 Game:Game
}