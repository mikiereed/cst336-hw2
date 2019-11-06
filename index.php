<!DOCTYPE <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <title>US Quiz</title>
      <link href="css/styles.css" rel="stylesheet" type="text/css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    </head>
    <body>
        <h1 id="mainHeading">Rock, Paper, Scissors</h1>
        
        <h3>Rock, Paper, or Scissors?</h3>
        <input type="text" id="usersMove">
        <br><br>

        <div id="outcomeFeedback"></div>
        <br>
        
        
        <h3 id="validationFdbk" class="bg-danger text-white"></h3>
        <button class="btn btn-outline-success">Submit Quiz</button>
        <br>
        <h2 id="totalScore"></h2>
        <h3 id="goodScoreMessage" class="text-info"></h3>
        <h3 id="totalAttempts"></h3>
    </body>
</html>