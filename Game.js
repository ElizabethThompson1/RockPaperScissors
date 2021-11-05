let prompt = require("prompt-sync")()
const AI = require("./AI")
const Player = require ("./Player")
const Human = require ("./Human")


class Game {
    constructor(){

    }

    PickWhoToPlay(){
        console.log("Who would you like to play 1 or 2? 1.Human or 2.AI?")
        let questionPickAPlayer =prompt();{
            if (questionPickAPlayer === "1"){
                this.humanVsHuman();
            }
            else  if (QuestionPickAplayer ==="2"){
                this.aiVsHuman();
            }// create else statrment to go back to questionpickplayer
        }
    }
    
    
    aiVsHuman(){
        this.playerOne = new Human ("Player")

        this.playerTwo = new AI ("AI")
    }   

    humanVsHuman(){
        this.playerOne = new Human ("Player One")
        this.playerTwo = new Human ("Player Two")
        
    } 
    pointsForPlayer(){
        let i = this.playerOne
        let s = this.playerTwo
        while(i <= 2 || s <= 2 );
            i++
            s++
            this.playerOne.chooseGesture();
            this.playerTwo.chooseGesture();
            this.choosesWhoWins();
            console.log(this.pointsForPlayer())
    }
    // ake a new function to add points where console.log is 
    choosesWhoWins(){
        if (this.playerOne.gesture ==="Rock"){
            if (this.playerTwo.gesture === this.playerOne.gesture){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo.gesture ==="Paper" || this.playerTwo.gesture === "Spock") {
                this.playerTwo.score++
            }
            else{
                this.playerOne.score++
            }
        }
        else if (this.playerOne.gesture === "Scissors" ){
            if (this.playerOne.gesture === this.playerTwo.gesture){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo.gesture ==="Rock" || this.playerTwo.gesture ==="Spock"){
                this.playerTwo.score++
            }
            else {
                this.playerOne.score++
            }
        
        }
        else if (this.playerOne.gesture === "Paper"){
            if (this.playerOne.gesture === this.playerTwo.gesture){
                console.log("it's  TIE!")
            }
            else if (this.playerTwo.gesture === "Scissors" || this.playerTwo.gesture ==="Lizard"){ 
                this.playerTwo.score++
            }
            else {
                this.playerOne.score++
            }
        }
        else if (this.playerOne.gesture === "Lizard"){
            if (this.playerTwo.gesture === this.playerOne.gesture){
                console.log("it's  TIE!")
            }
            else if(this.playerTwo.gesture === "Rock" || this.playerTwo.gesture === "Scissors") {
                this.playerTwo.score++
            }
            else{
                this.playerOne.score++
            }
        }
        else if (this.playerOne.gesture === "Spock"){
            if (this.playerTwo.gesture === this.playerOne.gesture){
                console.log ("It's a TIE!")
            }
            else if (this.playerTwo.gesture === "Paper" || this.playerTwo.gesture === "Lizard") {
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
        this.pointsForPlayer();
        
      
    }
}
module.exports={
 Game:Game
}