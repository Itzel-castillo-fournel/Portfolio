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

document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si nous sommes sur mobile
    if(window.innerWidth <= 768) {
        // Ajouter un gestionnaire d'événements pour chaque élément de timeline
        document.querySelectorAll('.timeline').forEach(function(timeline) {
            timeline.addEventListener('click', function() {
                // Fermer toutes les timelines ouvertes
                document.querySelectorAll('.timeline').forEach(function(t) {
                    if(t !== timeline) {
                        t.classList.remove('active');
                    }
                });
                
                // Basculer la classe 'active' pour cette timeline
                this.classList.toggle('active');
            });
        });
    }
});
