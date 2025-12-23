let currentCardIndex = 0;
const totalCards = 3;
const maxScreenWidth = 960;

function showCard(index) {
    const cards = document.querySelectorAll('.card-services');
    cards.forEach(card => card.style.display = 'none');
    cards[index].style.display = 'flex';
}

function showAllCards() {
    const cards = document.querySelectorAll('.card-services');
    cards.forEach(card => card.style.display = 'flex');
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    showCard(currentCardIndex);
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    showCard(currentCardIndex);
}

function handleResize() {
    const prevButton = document.querySelector('button[onclick="prevCard"]');
    const nextButton = document.querySelector('button[onclick="nextCard"]');

    if (window.innerWidth <= maxScreenWidth) {
        // Enable carousel
        showCard(currentCardIndex);

        // Check if the buttons exist before attaching event listeners
        if (prevButton) {
            prevButton.addEventListener('click', prevCard);
        }

        if (nextButton) {
            nextButton.addEventListener('click', nextCard);
        }
    } else {
        // Disable carousel
        if (prevButton) {
            prevButton.removeEventListener('click', prevCard);
        }

        if (nextButton) {
            nextButton.removeEventListener('click', nextCard);
        }

        // Show all cards when the screen width is above 960px
        showAllCards();
    }
}

// Initial setup
handleResize();

// Listen for window resize events
window.addEventListener('resize', handleResize);
