const stateInput = document.getElementById("stateInput");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

let guessedStates = [];

// List of all U.S. states
const allStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];

// Function to update the score display
function updateScore() {
    const scoreNumber = guessedStates.length;
    scoreElement.innerHTML = `<span style="font-size: 1.5em; font-weight: bold; color: green;">${scoreNumber}</span>/50`;
}

// Function to handle state input
stateInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const stateName = stateInput.value.trim().replace(/\b\w/g, c => c.toUpperCase());

        if (allStates.includes(stateName) && !guessedStates.includes(stateName)) {
            guessedStates.push(stateName);
            updateScore();

            if (guessedStates.length === 50) {
                alert(`🎉 Congrats! You guessed all 50 states!`);
            }
        } else {
            alert("❌ Incorrect state name or already guessed!");
        }
        
        stateInput.value = ""; // Clear input
    }
});

// Restart the game
restartButton.addEventListener("click", function() {
    guessedStates = [];
    scoreElement.innerHTML = `<span style="font-size: 1em; font-weight: normal;">0</span>/50`;
});
