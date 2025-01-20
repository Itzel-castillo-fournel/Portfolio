document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
     // Convertit les éléments avec la classe 'vignette' en un tableau
    const vignettes = Array.from(container.querySelectorAll('.vignette'));

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
    }
});


