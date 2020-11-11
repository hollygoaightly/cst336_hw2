<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Hangman</title>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <header>
            <h1>Hangman</h1>
        </header>
        <main>
            <figure>
                <img id="hangman" src="img/hangman1.png">
            </figure>
            <br/><br/>
            <h2 id="output"></h2>
            <br/><br/>
            <h3>Enter a letter</h3>
            <input type="text" id="guess">
            <br/>
            <br/>
            <button id="go">Go</button>
        </main>
        <footer>
            <hr>
            <figure>
                <img src="img/logo.png">
            </figure>
            CST336 Internet Programming. 2020&copy Stephens <br />
            <strong>Disclaimer:</strong> The information in this webpage is fictitious.<br />
            It us used for academic purposes only.
        </footer>
    </body>
    <script src = "main.js"></script>
</html>