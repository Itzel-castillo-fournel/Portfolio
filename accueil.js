document.addEventListener('DOMContentLoaded', function() {
   
    const timelineItems = document.querySelectorAll('.timeline');

    timelineItems.forEach(item => {
        // Ajoute un écouteur d'événement pour lorsque la souris entre dans l'élément
        item.addEventListener('mouseenter', function() {
            // Sélectionne l'élément avec la classe 'contentime'
            const content = item.querySelector('.contentime');
            // Affiche cet élément
            content.style.display = 'block';
        });

        // Ajoute un écouteur d'événement pour lorsque la souris quitte l'élément
        item.addEventListener('mouseleave', function() {
            const content = item.querySelector('.contentime');
            // Cache cet élément
            content.style.display = 'none';
        });
    });
});

