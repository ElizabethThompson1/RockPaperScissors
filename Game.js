let prompt = require("prompt-sync")()
const AI = require("./AI")
const Player = require ("./Player")
const Human = require ("./Human")


class Game {
    constructor(){

    }

    PickWhoToPlay(){
        console.log("Who would you like to play 1 or 2? 1.Human or 2.AI?")
        let QuestionPickAplayer =prompt();
            if (QuestionPickAplayer === "1"){
                this.humanVsHuman()
            }
            else  if (QuestionPickAplayer ==="2"){
                this.aiVsHuman();
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
        while(this.playerOne < 3; this.playerTwo <3)

    }
    // ake a new function to add points where console.log is 
    choosesWhoWins(){
        if (this.playerOne ==="Rock"){
            if (this.playerTwo === this.playerOne){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo ==="Paper" || this.playerTwo === "Spock") {
                this.playerTwo.score++
            }
            else{
                this.playerOne.score++
            }
        }
        else if (this.playerOne === "Scissors" ){
            if (this.playerOne === this.playerTwo){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo ==="Rock" || this.playerTwo ==="Spock"){
                this.playerTwo.score++
            }
            else {
                this.playerOne.score++
            }
        
        }
        else if (this.playerOne === "Paper"){
            if (this.playerOne === this.playerTwo){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo === "Scissors" || this.playerTwo ==="Lizard"){ 
                this.playerTwo.score++
            }
            else {
                this.playerOne.score++
            }
        }
        else if (this.playerOne === "Lizard"){
            if (this.playerTwo === this.playerOne){
                console.log("it's  TIE!")
            }
            else if(this.playerTwo === "Rock" || this.playerTwo === "Scissors") {
                this.playerTwo.score++
            }
            else{
                this.playerOne.score++
            }
        }
        else if (this.playerOne === "Spock"){
            if (this.playerTwo === this.playerOne){
                console.log ("It's a TIE!")
            }
            else if (this.playerTwo === "Paper" || this.playerTwo === "Lizard") {
                this.playerTwo.score++
            }
            else {
                this.playerOne.score++
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