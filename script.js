function roll(){
    var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDice1= "dice" + RandomNumber1 + ".png";
    var diceImage1 = "images/" + randomDice1;
    var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDice2 = "dice" + RandomNumber2 + ".png"
    var diceImage2 = "images/" + randomDice2;
  
    var image1= document.querySelectorAll("img")[0];
    image1.setAttribute("src", diceImage1);

    var image2=document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

    if(RandomNumber1 > RandomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }

    var sum = RandomNumber1 + RandomNumber2;
    var mult = RandomNumber1 * RandomNumber2;
     
    document.getElementById("results").innerHTML="Sum = " +sum + " Multiplication = " +mult;
}