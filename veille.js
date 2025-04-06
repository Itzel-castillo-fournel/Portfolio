document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
    // Convertit les éléments avec la classe 'vignette' en un tableau
    const vignettes = Array.from(container.querySelectorAll('.vignette'));

    // Fonction pour trier les vignettes
    window.sortBy = function(criteria) {
        // Trie les vignettes en fonction du critère fourni
        const sortedVignettes = vignettes.sort((a, b) => {
            if (criteria === 'date') {
                // Trie par date en convertissant les données en objets Date
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            } else if (criteria === 'rating') {
                // Trie par note croissante en convertissant les données en nombres 
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            }
        });
        
        // Vide le contenu actuel du conteneur
        container.innerHTML = '';
        // Ajoute les vignettes triées au conteneur
        sortedVignettes.forEach(vignette => container.appendChild(vignette));
        
        // Réattacher les écouteurs d'événements après le tri
        attachClickListeners();
    };

    // Fonction pour attacher les écouteurs de clic
    function attachClickListeners() {
        const currentVignettes = Array.from(container.querySelectorAll('.vignette'));
        currentVignettes.forEach(vignette => {
            // Supprime l'ancien écouteur s'il existe pour éviter les doublons
            vignette.removeEventListener('click', handleVignetteClick);
            // Ajoute le nouvel écouteur
            vignette.addEventListener('click', handleVignetteClick);
        });
    }

    // Fonction de gestion du clic
    function handleVignetteClick(e) {
        // Ne s'applique que sur les appareils tactiles
        if (window.matchMedia('(hover: none)').matches) {
            // Trouve l'overlay dans cette vignette
            const overlay = this.querySelector('.overlay');
            
            // Si l'overlay existe, bascule sa visibilité
            if (overlay) {
                // Ferme d'abord tous les overlays ouverts
                document.querySelectorAll('.overlay.active').forEach(el => {
                    if (el !== overlay) {
                        el.classList.remove('active');
                    }
                });
                
                // Bascule la classe active sur cet overlay
                overlay.classList.toggle('active');
                
                // Empêche la propagation de l'événement
                e.stopPropagation();
            }
        }
    }

    // Ajouter un écouteur pour fermer les overlays quand on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.vignette')) {
            document.querySelectorAll('.overlay.active').forEach(overlay => {
                overlay.classList.remove('active');
            });
        }
    });

    // Attacher les écouteurs initiaux
    attachClickListeners();
});

