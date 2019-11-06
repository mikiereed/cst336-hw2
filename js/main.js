$(document).ready(function() {
          //global variables
          var WINS = localStorage.getItem("wins");
          var ATTEMPTS = localStorage.getItem("total_attempts");
          
          //event listeners
          $("#shootButton").on("click", playGame);
          
          //functions
          function isFormValid() {
            let isValid = false;
            let input = $("#usersMove").val().toLowerCase();
            if (input == "rock" || input == "paper" ||
              input == "scissors") {
              isValid = true;
              $("#validationFdbk").html("Please play rock, paper, or scissors only...");
            }
              return isValid;
          }
          
          function playGame() {
            $("#validationFdbk").html(""); //resets validation feedback
            if (!isFormValid()) {
              return;
            }
            
            $("#usersMove").html(""); //resets usersMove
          }
          
        })//ready