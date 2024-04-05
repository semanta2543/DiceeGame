function roll() {
    // Get references to dice images
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
  
    // Roll the dice animation
    var rollCount = 0;
    var rollInterval = setInterval(function () {
      // Change dice images rapidly to simulate rolling
      var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
      var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
      image1.setAttribute("src", "images/dice" + RandomNumber1 + ".png");
      image2.setAttribute("src", "images/dice" + RandomNumber2 + ".png");
  
      rollCount++;
      // Stop animation after 10 iterations 
      if (rollCount >= 10) {
        clearInterval(rollInterval); // Stop the interval
        // Determine the winner after animation stops
        if (RandomNumber1 > RandomNumber2) {
          document.querySelector("h1").innerHTML = "Player 1 Wins!";
        } else {
          document.querySelector("h1").innerHTML = "Player 2 Wins!";
        }
        // Display sum and multiplication results
        var sum = RandomNumber1 + RandomNumber2;
        var mult = RandomNumber1 * RandomNumber2;
        document.getElementById("results").innerHTML =
          "Sum = " + sum + " Multiplication = " + mult;
      }
    }, 100); // Change images every 100 milliseconds (adjust as needed)
  }
  