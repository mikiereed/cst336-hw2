<!DOCTYPE <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <title>Rock, Paper, Scissors</title>
      <link href="css/styles.css" rel="stylesheet" type="text/css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    </head>
    <body>
        <h1 id="mainHeading">Rock, Paper, Scissors</h1>
        
        <h3>Rock, Paper, or Scissors?</h3>
        <input type="text" id="userMove">
        <h3 id="validationFdbk" class="danger"></h3>
        <button id="shootButton" type="reset">Shoot!</button>
        <br><br>
        <table class="center">
          <tr>
            <td>You</td>
            <td>Computer</td>
          </tr>
          <tr>
            <td><img src="img/blank.png" id="userPicture"></img></td>
            <td><img src="img/blank.png" id="computerPicture"></img></td>
          </tr>
        </table>
        <h2 id="outcome"></h2>
        <h3 id="outcomeMessage"></h3>
        <br></br>
        <footer>
            <hr>
            CST336 Internet Programming.
            <br />
            2019&copy; mikie Reed <br />
            CSUMB
        </footer>
    </body>
</html>