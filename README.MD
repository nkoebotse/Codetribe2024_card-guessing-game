# Node.js Card Guessing Game

This project is a card guessing game built using Node.js with EJS templates. The game objective is to match pairs of hidden cards by selecting two at a time. If the cards match, they remain open; if not, they flip back. The game is won when all pairs are successfully matched.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)

## Objective

The main goal of this project is to create an engaging card-matching game using Node.js and EJS for rendering templates. The game logic and card board layout are dynamically handled on the server-side, providing an interactive experience in the browser.

## Features

- **Dynamic Card Setup**: 36 cards (6x6 grid), randomly shuffled each time the game starts.
- **Matching Mechanics**: Cards remain open if they match; if not, they flip back to hide their contents.
- **Restart Functionality**: Users can restart the game at any time, reshuffling all cards.
- **Win Notification**: A pop-up congratulates the user upon successfully matching all card pairs.
- **No Data Persistence**: Game data is reset each time the game restarts.
- **User-Friendly Interface**: Intuitive layout that is easy to understand and play.

## Project Structure

HOW TO RUN THE CODE

npm i
node server.js