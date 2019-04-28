window.addEventListener("load", function () {
  var myName = document.getElementById("myName");
  var letters = ["B", "U", "R", "H", "A", "N"]
  myAudio = new Audio('media/Kinkles.mp3');
  myAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  myAudio.play();

  function animate() {
      myName.innerHTML = "";
      for (i = 0; i < letters.length; i++ ) {
        letter = document.createElement('span');
        letter.innerHTML = letters[i];
        letter.style.color = "rgb(" + rndNumber() + "," + rndNumber() + "," + rndNumber() + ")";
        myName.appendChild(letter);
      }
  }
  setInterval(animate, 100);

})

  function rndNumber() {
    return Math.floor(Math.random() * 255);
  }
