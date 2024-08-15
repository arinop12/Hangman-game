var placeHolderWord = ["LAGOON" ,"NECTAR" , "GALAXY" ,"WHISPER"];

var lineHint = ["A tranquil pool nestled between ancient cliffs, where mermaids might bask in moonlight." 
    , "The sweet elixir that flowers offer to hummingbirds and bees."
    , "A cosmic swirl of stardust, home to a billion dreams." 
    , "A soft, secretive word that tiptoes through the syllables."]

var randomNumber = Math.floor(Math.random() * 4);

var GeneratedWord = placeHolderWord[randomNumber];

var userWord = [];

var count = 0;

gameFunctions();

function gameFunctions(){
    console.log(GeneratedWord);
    userBox();
    lineHints(randomNumber);
    blank();
}


function userBox() {
    

    $("button").click(function() {
        var userClick = $(this).attr("class");
        var correctGuess = false;

        for (var i = 0; i < GeneratedWord.length; i++) {
            if (GeneratedWord.slice(i, i+1) == userClick) {
                $(".l" + (i + 1)).text(userClick);
                userWord.push(userClick);
                correctGuess = true;
                
                if(userWord.length == GeneratedWord.length){
                    document.querySelector(".container").style.opacity = "0.5";
                    document.getElementById("modal1").style.display="block";
                }
            }
        }

        if (!correctGuess) {
            count += 1;
            $(".iG").text("Incorrect Guess: " + count + " / 6");
            $(".img").attr("src" , "images/hangman-"+count+".svg");

            if (count == 6) {
                document.querySelector(".container").style.opacity = "0.5";
                document.getElementById("modal2").style.display="block"; 
            }
        }
    });
}

   

function lineHints(index){
    $("b").text(lineHint[index]);
}

function blank(){
    var blanks = GeneratedWord.length;
    for(var i = 1 ; i <= blanks ; i++){
        $(".l" + i).text("___");
    }
}

document.getElementById("modal1").style.display="none";
document.getElementById("modal2").style.display="none";

function hangmanStructure(){
    switch(count){
       case 1:
        $()
    }
}


  


    
    
    

