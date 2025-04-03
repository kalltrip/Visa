// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    const destinationCards = document.querySelectorAll('.destination-card'); // All the destination cards
    const loadMoreButton = document.getElementById('loadMoreBtn'); // The "Load More" button
    const cardsPerLoad = 3; // How many cards to show initially and per click

    // Initially hide all cards except for the first 3
    function updateCards() {
        destinationCards.forEach((card, index) => {
            if (index < cardsPerLoad) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Show the load more button only if there are more than the visible cards
        if (destinationCards.length > cardsPerLoad) {
            loadMoreButton.style.display = 'inline-block'; // Show the "Load More" button
        } else {
            loadMoreButton.style.display = 'none'; // Hide the button if there are no more cards to load
        }
    }

    // Load more cards when the button is clicked
    loadMoreButton.addEventListener('click', function () {
        const visibleCards = document.querySelectorAll('.destination-card[style*="display: block"]'); // Cards that are currently visible
        const startIndex = visibleCards.length; // Where to start loading the next cards

        // Show the next set of cards
        for (let i = startIndex; i < startIndex + cardsPerLoad && i < destinationCards.length; i++) {
            destinationCards[i].style.display = 'block';
        }

        // If all cards are loaded, hide the "Load More" button
        if (startIndex + cardsPerLoad >= destinationCards.length) {
            loadMoreButton.style.display = 'none';
        }
    });

    // Initial setup: Hide cards and show only the first 3
    updateCards();
});
