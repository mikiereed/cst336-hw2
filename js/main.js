$(document).ready(function() {
          //global variables
          //var WINS = localStorage.getItem("wins");
          //var ATTEMPTS = localStorage.getItem("total_attempts");
          
          //event listeners
          $("#shootButton").on("click", playGame);
          
          //functions
          function isPlayValid(userMove) {
            let isValid = true;
            if (userMove !== "rock" && userMove !== "paper" &&
              userMove !== "scissors") {
              isValid = false;
              $("#validationFdbk").html("Please play rock, paper, or scissors only...");
            }
              return isValid;
          }
          
          function setPicture(player, move) {
            $(`#${player}Picture`).attr("src", `img/${move}.png`)
          }
          
          function getComputerMove() {
            let randomNumber = (Math.floor(Math.random() * 10)) % 3; //number between 0-2
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
          
          function getOutcome(userMove, computerMove) {
            if (userMove == computerMove)
            {
              return "tie";
            }
            if (userMove == "rock") {
              if (computerMove == "paper") {
                return "computer";
              } else if (computerMove == "scissors") {
                return "user";
              }
            }
            if (userMove == "paper") {
              if (computerMove == "scissors") {
                return "computer";
              } else if (computerMove == "rock") {
                return "user";
              }
            }
            if (userMove == "scissors") {
              if (computerMove == "rock") {
                return "computer";
              } else if (computerMove == "paper") {
                return "user";
              }
            }
          }
          
          function playGame() {
            let userMove = $("#userMove").val().toLowerCase();
            $("#validationFdbk").html(""); //resets validation feedback
            if (!isPlayValid(userMove)) {
              return;
            }
            setPicture("user", userMove);
            let computerMove = getComputerMove();
            setPicture("computer", computerMove);
            let outcome = getOutcome(userMove, computerMove);
            $("#userMove").value(""); //resets input box
          }
          
        })//ready