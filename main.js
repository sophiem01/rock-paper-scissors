let playerPoints = 0;  
let compPoints = 0;
var rounds = 1; 

    function getComputerChoice() {
        const stringArray = ["Rock", "Paper", "Scissors"]; 
        const randElement = stringArray[Math.floor(Math.random() * stringArray.length)];
        return randElement;
    }

    
    function computerColor(computerAnswer) {
        if (computerAnswer === "Rock") {
            removeColor(); 
            cbutt1.classList.add('compChoice');
        } else if (computerAnswer === "Paper") {
            removeColor(); 
            cbutt2.classList.add('compChoice');
        } else if (computerAnswer === "Scissors") {
            removeColor(); 
            cbutt3.classList.add('compChoice');
        }
    }

    function removeColor() {
        cbutt1.classList.remove('compChoice');
        cbutt2.classList.remove('compChoice');
        cbutt3.classList.remove('compChoice');
    }
    

    function publishScore() {
        document.getElementById("score1").innerHTML = compPoints;
        document.getElementById("score2").innerHTML = playerPoints;
        document.getElementById("roundsnum").innerHTML = " " + rounds;
    }


    function playRound(computerSelection, playerChoice) {
        
       computerColor(computerSelection); 

        if (
            playerChoice === 'rock' && computerSelection === 'Scissors' ||
            playerChoice === 'paper' && computerSelection === 'Rock' ||
            playerChoice === 'scissors' && computerSelection === 'Paper')
         {
            playerPoints++; 
            document.getElementById("results").innerHTML = "You win this round!";
        } else if (
            playerChoice === 'paper' && computerSelection === 'Scissors' ||
            playerChoice === 'scissors' && computerSelection === 'Rock' ||
            playerChoice === 'rock' && computerSelection === 'Paper')
         {
            compPoints++; 
            document.getElementById("results").innerHTML = "You lose this round!";
        } else if (
            playerChoice === computerSelection.toLowerCase())
             {
                document.getElementById("results").innerHTML = "You tied this round!";
            }
        publishScore(); 
        rounds++; 
    }


     
    function playGame(playerChoice) {
        if (rounds <= 5) {
            let computerSelection = getComputerChoice();
            (playRound(computerSelection, playerChoice));  
        } else {
            ending(); 
        }
    }
    

    function ending() {
        if (playerPoints > compPoints) {
            document.getElementById("results").innerHTML = "You win the game!";
        } else if (compPoints > playerPoints) {
            document.getElementById("results").innerHTML = "You lose the game!";
        } else {
            document.getElementById("results").innerHTML = "You tied the game!";
        }

        document.getElementById("roundsnum").innerHTML = "GAME OVER";
        document.getElementById("restartbutton").className = 'show';

    }




 
    
   

    