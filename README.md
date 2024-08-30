# Rock-Paper-Scissor-Game

This project is a simple implementation of the classic Rock-Paper-Scissors game using JavaScript, HTML, and CSS. The game allows a user to play against the computer, which makes random choices. The score is kept for both the user and the computer, and the outcome of each round is displayed on the screen.

## Features

- Interactive game interface using HTML, CSS, and JavaScript.
- The user can choose between "rock", "paper", and "scissors".
- The computer randomly selects its choice.
- The game announces a win, loss, or draw for each round.
- The score is updated dynamically after each round.
- Simple and responsive design with hover effects and real-time feedback.

## Game Logic
The JavaScript code implements the following logic for the game:

**Random Choice for Computer:** The computer makes a random choice between "rock", "paper", and "scissors".
**Determine Winner:** The game logic checks the user's choice against the computer's choice to determine the winner:
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- 
**Draw Scenario:** If both choices are the same, the round results in a draw.
**Update Scores:** Depending on the outcome, the score is updated for either the user or the computer.
**Display Result:** The game displays a message indicating whether the user won, lost, or drew the round, and updates the scoreboard accordingly.
