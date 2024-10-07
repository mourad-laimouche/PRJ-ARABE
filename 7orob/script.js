document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', function() {
        const warID = this.getAttribute('data-info');

        // Masquer toutes les sections info
        document.querySelectorAll('.war-info').forEach(info => {
            info.style.display = 'none';
        });

        // Afficher celle qui est liée à l'événement
        document.getElementById(warID).style.display = 'block';
    });
});
