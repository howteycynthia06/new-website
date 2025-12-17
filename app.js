function startGame() {
  // 1️⃣ User input: player name
  let playerName = prompt("What’s your name, baller?");
  document.getElementById("intro").textContent =
    "Welcome to the court, " + playerName + "!";

  // 2️⃣ confirm() + conditional logic
  let playsBasketball = confirm("Do you play basketball?");

  if (playsBasketball) {
    document.getElementById("court").textContent =
      "You’re a hooper! 🏀🔥";
  } else {
    document.getElementById("court").textContent =
      "You’re still welcome on the court!";
  }

  // 3️⃣ Stretch goal: change court color
  let teamColor = prompt(
    "What’s your team color? (red, blue, #FFA500, etc.)"
  );

  document.getElementById("court").style.backgroundColor = teamColor;
}



