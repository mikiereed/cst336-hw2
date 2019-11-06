$(document).ready(function() {
          //global variables
          //var WINS = localStorage.getItem("wins");
          //var ATTEMPTS = localStorage.getItem("total_attempts");
          
          //event listeners
          $("#shootButton").on("click", playGame);
          
          //functions
          function isPlayValid(userMove) {
            let isValid = false;
            alert(userMove);
            if (userMove !== "rock" || userMove !== "paper" ||
              userMove !== "scissors") {
              isValid = true;
              $("#validationFdbk").html("Please play rock, paper, or scissors only...");
            }
              return isValid;
          }
          
          function setPicture(player, move) {
            $(`#${player}Picture`).attr("src", `img/${move}.png`)
          }
          
          function getComputerMove() {
            let randomNumber = Math.Floor(Math.random() * 10) % 3; //number between 0-2
            switch (randomNumber) {
              case 0:
                return "rock";
                break;
              case 1:
                return "paper";
                break;
              default:
                return "scissors";
                break;
            }
          }
          
          function playGame() {
            let userMove = $("#usersMove").val().toLowerCase();
            $("#validationFdbk").html(""); //resets validation feedback
            if (!isPlayValid(userMove)) {
              return;
            }
            setPicture("user", userMove);
            let computerMove = getComputerMove();
            setPicture("computer", computerMove);
            //let userWon = decideWinner(userMove, computerMove);
            $("#usersMove").html(""); //resets usersMove
          }
          
        })//ready