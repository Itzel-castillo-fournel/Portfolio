document.addEventListener('DOMContentLoaded', (event) => {

    // Fonction pour afficher une popup en fonction de l'id
    window.showPopup = function(id) {
    
        document.getElementById(id).style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    }

    // Fonction pour cacher une popup en fonction de l'id (en cliquant sur la croix)
    window.hidePopup = function(id) {
  
        document.getElementById(id).style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }

    // Fonction pour cacher toutes les popups en cliquant hors de la fiche projet
    window.hideAllPopups = function() {

        document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
        document.querySelector('.overlay').style.display = 'none';
    }

    // Fonction pour filtrer les projets selon une catégorie
    window.filterProjects = function(category) {

        // Sélectionne tous les éléments avec la classe 'vignette'
        const projects = document.querySelectorAll('.vignette');
        projects.forEach(project => {
            // Si la catégorie est 'Tous', affiche tous les projets
            if (category === 'Tous') {
                project.style.display = 'block';
            } else {
                // Affiche les projets qui appartiennent à la catégorie spécifiée
                if (project.classList.contains(category)) {
                    project.style.display = 'block';
                } else {
                    // Cache les projets qui n'appartiennent pas à la catégorie
                    project.style.display = 'none';
                }
            }
        });

    }

    // Ouvre par défaut l'onglet "Tous"
    document.querySelector('.tablink').click();
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne toutes les images avec la classe 'imageProjet'
    const images = document.querySelectorAll('.imageProjet');
    // Crée un div pour l'overlay et l'ajoute au document
    const overlay = document.createElement('div');
    overlay.className = 'overlay-image';
    document.body.appendChild(overlay);

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Vérifie si l'image est déjà agrandie
            const isExpanded = image.classList.contains('expanded');
            // Réduit toutes les autres images
            images.forEach(img => {
                img.classList.remove('expanded');
            });
            if (isExpanded) {
                // Si l'image est déjà agrandie, la réduit
                image.classList.remove('expanded');
                overlay.style.display = 'none';
            } else {
                // Sinon, agrandit l'image et affiche l'overlay
                image.classList.add('expanded');
                overlay.style.display = 'block';
            }
        });
    });

    // Cache l'overlay et réduit les images agrandies au clic sur l'overlay
    overlay.addEventListener('click', function() {
        images.forEach(img => img.classList.remove('expanded'));
        overlay.style.display = 'none';
    });
});
