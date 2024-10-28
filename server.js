const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the main game page
app.get('/', (req, res) => {
    // Generate shuffled cards (pairs of 1-18, duplicated)
    const cards = Array.from({ length: 18 }, (_, i) => i + 1).flatMap(n => [n, n]);
    // Shuffle cards using Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    res.render('index', { cards });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
