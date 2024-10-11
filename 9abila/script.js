
  




function showCard(cardId) {
    // Sélectionne toutes les cartes
    const cards = document.querySelectorAll('.message-card');
    const overlay = document.getElementById('overlay');
    
    // Masque toutes les cartes et montre l'overlay
    cards.forEach(card => {
        card.querySelector('.message').classList.add('hidden');
        card.classList.remove('centered');
    });
    
    // Affiche le message de la carte sélectionnée
    const selectedCard = document.getElementById(cardId);
    selectedCard.querySelector('.message').classList.remove('hidden');
    
    // Centrer la carte sélectionnée et montrer l'overlay
    selectedCard.classList.add('centered');
    overlay.style.display = 'block';
}

function hideCards() {
    // Réinitialise toutes les cartes et cache l'overlay
    const cards = document.querySelectorAll('.message-card');
    const overlay = document.getElementById('overlay');
    
    cards.forEach(card => {
        card.querySelector('.message').classList.add('hidden');
        card.classList.remove('centered');
    });
    
    overlay.style.display = 'none';
}
