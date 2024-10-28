let firstCard, secondCard;
let lockBoard = false;
let matches = 0;

function selectCard(cardElement) {
    if (lockBoard || cardElement === firstCard) return;

    cardElement.classList.add('flip');

    if (!firstCard) {
        firstCard = cardElement;
        return;
    }

    secondCard = cardElement;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.id === secondCard.dataset.id;

    if (isMatch) {
        matches += 1;
        resetCards(true);
        if (matches === 18) {
            document.getElementById('congratulations').classList.remove('hidden');
        }
    } else {
        lockBoard = true;
        setTimeout(() => resetCards(false), 1000);
    }
}

function resetCards(isMatch) {
    if (isMatch) {
        firstCard.removeEventListener('click', selectCard);
        secondCard.removeEventListener('click', selectCard);
    } else {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
    firstCard = secondCard = null;
    lockBoard = false;
}

function resetGame() {
    window.location.reload();
}
